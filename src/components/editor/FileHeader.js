const FileHeader = (props) => {
    // Displays the file name open in the editor.
    const filename = "test-file.md"; // dynamically fill next time
    return ( 
        <div className="file-header">
            <h3>{filename}</h3>
        </div>
     );
}
 
export default FileHeader;