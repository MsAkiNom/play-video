import video from './video.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <div>
        <video loop autoPlay src= {video} className="Video-frame" alt="video">
        </video>
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
