import React from "react";
import { Routes, Route } from "react-router-dom"; 
import NavBar from "./components/NavBar/NavBar";
import Upload from "./components/Upload/Upload";
import Feedback from "./components/Feedback/Feedback";
import Resources from "./components/Resource/Resource";
import Main from "./components/mainpage/main"; 
import "./App.css";

function App() {
    return (
        <div className="app-container">
            <NavBar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/resources" element={<Resources />} />
            </Routes>
        </div>
    );
}

export default App;
