import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import JagCoachLogo from "./JagCoach.png"


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
      const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setTranscript(response.data.transcript || "No transcript available.");
    } catch (error) {
      console.error("Error:", error);
      setTranscript("Error processing video.");
    }
  };

  return (
    <div className="container">
      <h1>JagCoach - Team 2</h1>
      <div className="logo">
        <img src={JagCoachLogo} alt="JagCoach Logo" className="logo" />
      </div>

      <div className="main-content">
        {/* Left Side: Video Upload */}
        <div className="video-section">
          <h2>Upload your video</h2>
          <input type="file" accept="video/*" onChange={handleFileChange} />
          <video controls>
            {videoFile && <source src={URL.createObjectURL(videoFile)} type="video/mp4" />}
            Your browser does not support the video tag.
          </video>
          <button onClick={handleAnalyze}>Analyze Video</button>
        </div>

        {/* Right Side: AI Transcript */}
        <div className="transcript-section">
          <h2>Analyze - AI Transcript</h2>
          <div id="transcript">
            <p>{transcript}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
