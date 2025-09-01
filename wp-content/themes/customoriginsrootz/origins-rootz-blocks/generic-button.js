import { link } from "@wordpress/icons"
import { useState } from "@wordpress/element"
import { ToolbarGroup, ToolbarButton, Popover, Button, PanelBody, PanelRow, ColorPalette } from "@wordpress/components"
import { RichText, InspectorControls, BlockControls, __experimentalLinkControl as LinkControl, AlignmentToolbar, getColorObjectByColorValue } from "@wordpress/block-editor"
import originsRootzColors from "../inc/originsRootzColors"

wp.blocks.registerBlockType("originsrootzblocktheme/generic-button", {
    title: "Generic Button",
    attributes: {
      text: {type: "string"},
      size: {type: "string", default: "large"},
      buttonAlignment: {
        type: 'string',
        default: 'none'
      },
      linkObject: {type: "object", default: { url: ""}},
      colorName: {
        type: 'string',
        default: 'blue'
      }
    },
    edit: EditComponent,
    save: SaveComponent
})


function EditComponent({attributes, setAttributes}){

    const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false)

    function handleTextChange(value){
        setAttributes({text: value})
    }

    function onChangeAlignment(value){
        setAttributes({textAligment: value})
    }

    function buttonHandler(){
        setIsLinkPickerVisible(prev => !prev)
    }

    function handleLinkChange(newLink){
        setAttributes({linkObject: newLink})
    }

    function handleColorChange(colorCode) {
        // from the hex value that the color palette gives us, we need to find its color name
        const { name } = getColorObjectByColorValue(originsRootzColors, colorCode)
        setAttributes({colorName: name})
    }

    const currentColorValue = originsRootzColors.filter(color => {
        return color.name == attributes.colorName
    }).color

    // console.log({attributes})
    return (
        <>
            <BlockControls>
                <AlignmentToolbar value={ attributes.buttonAlignment } onChange={value => onChangeAlignment(value)}/>
                <ToolbarGroup>
                    <ToolbarButton onClick={buttonHandler} icon={link}/>
                </ToolbarGroup>
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
            <InspectorControls>
                <PanelBody 
                    title="color" 
                    initalOpen={true}
                >
                    <PanelRow>
                        <ColorPalette disableCustomColors={true} colors={originsRootzColors} value={currentColorValue} onChange={handleColorChange} />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <RichText allowedFormats={[]} tagName="a" value={attributes.text} className={`btn btn--${attributes.size} btn--${attributes.colorName}` } onChange={handleTextChange} />
            {isLinkPickerVisible && (
                <Popover position="middle center">
                        <LinkControl settings={[]} value={attributes.linkObject} onChange={handleLinkChange} />
                        <Button 
                            variant="primary"
                            onClick={() => setIsLinkPickerVisible(false)} 
                            style={{ display: "block", width: '100%' }}
                        >
                            Confirm Link
                        </Button>
                </Popover>
            )}
        </>
    )
}

function SaveComponent({attributes}){

    return (<>
       <a href={attributes.linkObject.url} className={`btn btn--${attributes.size} btn--${attributes.colorName}`} >
        {attributes.text}
       </a>
    </>);
}