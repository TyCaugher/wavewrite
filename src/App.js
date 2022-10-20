
import './App.css';
import EditorContainer from './components/UI/EditorContainer';
import Navbar from './components/UI/Navbar';

// App will contain the navbar,

function App() {
  return (
    <div className="App">
      <Navbar />
      <EditorContainer />
    </div>
  );
}

export default App;
