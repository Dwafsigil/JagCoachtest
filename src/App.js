import React, { useState } from 'react';
import './App.css';

function App() {
    const [videoFile, setVideoFile] = useState(null);
    const [transcript, setTranscript] = useState("Transcript will appear here after processing.");
    
    const handleFileChange = (event) => {
        setVideoFile(event.target.files[0]);
    };
    
    const handleAnalyze = async () => {
        if (!videoFile) {
            alert("Please upload a video first.");
            return;
        }
        
        const formData = new FormData();
        formData.append("file", videoFile);
        
        try {
            const response = await fetch("http://localhost:5000/upload", {
                method: "POST",
                body: formData,
            });
            
            const data = await response.json();
            setTranscript(data.transcript);
        } catch (error) {
            console.error("Error analyzing video:", error);
            setTranscript("Error processing video. Please try again.");
        }
    };
    
    return (
      <div className="app-container">
         <nav className="navbar">
              <div className="nav-left">
                  <div className="logo">JagCoach</div>
                  <img src="/JagCoach.png" alt="JagCoach Logo" className="nav-logo" />
              </div>
              <ul className="nav-links">
                  <li><a href="#upload">Upload</a></li>
                  <li><a href="#feedback">Feedback</a></li>
                  <li><a href="#video">Video</a></li>
              </ul>
          </nav>
  
            
            <div className="container">
                <div className="main-content">
                    <div className="video-section">
                        <h1>Upload your video</h1>
                        <input type="file" accept="video/*" onChange={handleFileChange} />
                        {videoFile && (
                            <video controls>
                                <source src={URL.createObjectURL(videoFile)} type={videoFile.type} />
                                Your browser does not support the video tag.
                            </video>
                        )}
                        <button onClick={handleAnalyze}>Analyze Video</button>
                    </div>
                    <div className="transcript-section">
                        <h1>Analyze - AI Transcript</h1>
                        <div id="transcript">{transcript}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
