import { InnerBlocks } from "@wordpress/block-editor"

wp.blocks.registerBlockType("originsrootzblocktheme/hero-banner", {
    title: "Hero Banner",
    edit: EditComponent,
    save: SaveComponent
})



function EditComponent(){

    const defaultText = (<>
        <div>
            <h3>Try something different</h3>
        </div>
        <div>
            <p>caslij cmsia clasim ncialsj cklasn clkasn cnasli casn
                caslij cmsia clasim ncialsj cklasn clkasn cnasli casn
                caslij cmsia clasim ncialsj cklasn clkasn cnasli casn
                caslij cmsia clasim ncialsj cklasn clkasn cnasli casn
                caslij cmsia clasim ncialsj cklasn clkasn cnasli casn
                caslij cmsia clasim ncialsj cklasn clkasn cnasli casn
            </p>
        </div>
    </>)

    return (
        <div class="hero-component container">
            <div class="small-image-and-text">
                <div> 
                    <img 
                        class=""
                        src="https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/original/image-manager/back-to-school-hero-1.jpg?t=1756248689"
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
                    src="https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/original/image-manager/back-to-school-hero-2.jpg?t=1756248717"
                />
            </div>
	    </div>
    )
}

function SaveComponent(){
    return (<>
        <div class="hero-component container">
            <div class="small-image-and-text">
                <div> 
                    <img 
                        class=""
                        src="https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/original/image-manager/back-to-school-hero-1.jpg?t=1756248689"
                    />
                </div>
                <div>
                    <InnerBlocks.Content />
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
                    src="https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/original/image-manager/back-to-school-hero-2.jpg?t=1756248717"
                />
            </div>
	    </div>
    </>);
}