import { ToolbarGroup, ToolbarButton } from "@wordpress/components"
import { RichText, BlockControls, AlignmentToolbar } from "@wordpress/block-editor"

wp.blocks.registerBlockType("originsrootzblocktheme/generic-heading", {
    title: "Generic Heading",
    attributes: {
      text: {type: "string"},
      size: {type: "string", default: "large"},
      textAlignment: {
        type: 'string',
        default: 'none'
      }
    },
    edit: EditComponent,
    save: SaveComponent
})


function EditComponent({attributes, setAttributes}){

    function handleTextChange(value){
        setAttributes({text: value})
    }

    function onChangeAlignment(value){
        setAttributes({textAligment: value})
    }

    // console.log({attributes})
    return (
        <>
            <BlockControls>
                <AlignmentToolbar value={ attributes.textAlignment } onChange={value => onChangeAlignment(value)}/>
                <ToolbarGroup>
                    <ToolbarButton isPressed={attributes.size === 'small'} onClick={() => setAttributes({size: "small"})}>
                        Small
                    </ToolbarButton>
                    <ToolbarButton isPressed={attributes.size === 'medium'} onClick={() => setAttributes({size: "medium"})}>
                        Medium
                    </ToolbarButton>
                    <ToolbarButton isPressed={attributes.size === 'large'} onClick={() => setAttributes({size: "large"})}>
                        Large
                    </ToolbarButton>
                </ToolbarGroup>
            </BlockControls>
            <RichText style={{ textAlign: attributes.textAligment }} tagName="h1" allowedFormats={["core/bold", "core/italic"]} value={attributes.text} className={`headline headline--${attributes.size}`} onChange={handleTextChange} />
        </>
    )
}

function SaveComponent({attributes}){

    function createTagName(){
        switch(attributes.size){
            case "large":
                return "h1"
            case "medium":
                return "h2"
            case "small":
                return "h3"     
        }
    }

    return (<>
        <AlignmentToolbar.Content value={ attributes.textAlignment } />
       <RichText.Content  style={{ textAlign: attributes.textAligment }}  tagName={createTagName()} value={attributes.text} className={`headline headline--${attributes.size}`} />
    </>);
}