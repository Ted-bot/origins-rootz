import { Button, PanelBody, PanelRow } from "@wordpress/components"
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import apiFetch from "@wordpress/api-fetch"
import { useEffect} from "@wordpress/element"
import { useSelect } from '@wordpress/data';
import { get } from 'lodash';


wp.blocks.registerBlockType("originsrootzblocktheme/hero-banner", {
    title: "Hero Banner",
    attributes: {
        imgID_One: { type: 'number'},
        imgID_Two: { type: 'number'},
        imgUrl_One: {type: "string"},
        imgUrl_Two: {type: "string"},
    },  
    edit: EditComponent,
    save: SaveComponent
})


function EditComponent({attributes, setAttributes}){

    const imgUrlOne = useSelect((select) => {
        const media = select('core').getMedia(attributes.imgID_One);
        console.log({media_img_1: media})
        return media?.source_url || '';
    }, [attributes.imgID_One]);

    const imgUrlTwo = useSelect((select) => {
        const media = select('core').getMedia(attributes.imgID_Two);
        console.log({media_img_2: media})
        return media?.source_url || '';
    }, [attributes.imgID_Two]);
    
    useEffect( () => {
        console.log({useEffect: {
            img_1: attributes.imgUrl_One,
            img_2: attributes.imgUrl_Two
        }})

        if (imgUrlOne && imgUrlOne !== attributes.imgUrl_One) {
            setAttributes({ imgUrl_One: imgUrlOne });
        }
        if (imgUrlTwo && imgUrlTwo !== attributes.imgUrl_Two) {
            setAttributes({ imgUrl_Two: imgUrlTwo });
        }
    },[attributes.imgID_One, attributes.imgID_Two ])

    function onFileSelectImageOne(x){
        setAttributes({imgID_One: x.id})
        console.log({ id: x.id, x})
        console.log({imgUrlOne})
    }
    
    function onFileSelectImageTwo(x){
        setAttributes({imgID_Two: x.id})
        console.log({ id: x.id, x})
        console.log({imgUrlTwo})
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title="Background One" initialOpen={true}>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload 
                                onSelect={onFileSelectImageOne} 
                                value={attributes.imgID_One}
                                render={({ open }) => {
                                    return <Button onClick={open}>Choose image</Button>
                            }} />
                        </MediaUploadCheck>
                    </PanelRow>
                </PanelBody>
                <PanelBody title="Background Two" initialOpen={true}>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload 
                                onSelect={onFileSelectImageTwo} 
                                value={attributes.imgID_Two}
                                render={({ open }) => {
                                    return <Button onClick={open}>Choose image</Button>
                            }} />
                        </MediaUploadCheck>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <div class="hero-component container">
                <div class="small-image-and-text">
                    <div> 
                        <img 
                            class=""
                            src={attributes.imgUrl_One ?? "https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/original/image-manager/back-to-school-hero-1.jpg?t=1756248689"}
                        />
                    </div>
                    <div>
                        <InnerBlocks allowedBlocks={["core/paragraph", "core/heading", "core/list", "originsrootzblocktheme/generic-heading", "originsrootzblocktheme/generic-button"]} />
                    </div>
                </div>		
                <div class="big-image">
                    <div class="action-button">
                        <a href="">
                            <img 
                                class="rotate-img"
                                src="https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/original/image-manager/shop-now-circle.png?t=1737980465"
                            />
                            <img class="pointer-img" src="https://store-8466dwhhql.mybigcommerce.com/content/svg/arrow-spin.svg"/>
                        </a>
                    </div>
                    <img
                        class="main-image"
                        src={ attributes.imgUrl_Two ?? "https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/original/image-manager/back-to-school-hero-2.jpg?t=1756248717"}
                    />
                </div>
            </div>
        </>
    )
}

function SaveComponent(){
    return <InnerBlocks.Content />;
}