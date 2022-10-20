import MdEditorBox from '../editor/MdEditorBox';
import './css/EditorContainer.css'

const EditorContainer = () => {
    // The container for the scratchpad and markdown editor.
    // display direction - 
    // Scratchpad will expand from the right here.
    return (
        <div className="editor-container">
            <MdEditorBox />
        </div>
    )
}
export default EditorContainer;