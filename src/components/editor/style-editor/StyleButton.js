const StyleButton = (props) => {
    // CODE RESPONSIBLE FOR  EDITING STYLES FROM THE TOP OF THE EDITOR.
    let onClickButton = (event) => {
        console.log("Click!")
        event.preventDefault();
        props.onToggle(props.style)
    }

    return ( 
        <button onMouseDown={onClickButton}>{props.label}</button>
     );
}
 
export default StyleButton;