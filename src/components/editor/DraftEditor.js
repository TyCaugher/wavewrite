import React, {useState, setState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import FormatEditor from './style-editor/FormatEditor';
import BlockStyleControls from './style-editor/BlockStyleControls';

// Need to convert this to react hooks later

const DraftEditor = (props) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const editor = React.useRef(null);

    function focusEditor() {
        // focus the draft-js editor
        editor.current.focus();
    }

    useEffect(() => {
        focusEditor();
    }, []);

    const onBlockClick = (e) => {
        let nextState = RichUtils.toggleBlockType(editorState, e);
        setEditorState(nextState);
    }

    const onInlineClick = (e) => {
        let nextState = RichUtils.toggleBlockType(editorState, e);
        setEditorState(nextState);
    }

    return ( 
        <div>
            <div className='block-editor-wrapper'>
                <BlockStyleControls onToggle={onBlockClick} />
            </div>
            <div className='draftjs-editor-wrapper'>
                <Editor 
                    ref={editor}
                    editorState={editorState}
                    onChange={(editorState) => setEditorState(editorState)}
                    placeholder='Write anything...'
                />
            </div>
        </div>
     );
}
 
export default DraftEditor;

