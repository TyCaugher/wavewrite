import React from 'react';
import ReactDOM from 'react-dom';

import './css/MdEditor.css'
import DraftEditor from './DraftEditor';
import FileHeader from './FileHeader';

const MdEditorBox = () => {
    return (
        <div className='md-editor'>
            <FileHeader />
            <div className='draft-editor-wrapper'>
                <DraftEditor />
            </div>
        </div>
    )
}
export default MdEditorBox;