import './App.css';
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <div>
        
        <ReactPlayer
          url="https://youtu.be/a9j6Pw_SFKE"
          controls
         />
        </div>
        
        
        <p>
          A short video for <a href='https://play.ee/'  target="_blank" rel="noopener noreferrer">gotoAndPlay</a>
        </p>
        <a
          className="App-link"
          href="https://github.com/MsAkiNom/play-video"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repo here!
        </a>
      </header>
    </div>
  );
}

export default App;
