import video from './video.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <div>
        <video loop autoPlay src= {video} className="video-frame" alt="video">
        
        </video>
        </div>
        
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
