import React from "react";
import "./App.css";
import { Video } from "./components/Video";

function App() {
  return (
    <div className="app">
      <h1>Let's do it!<span>🚀</span></h1>
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        
      </div>
    </div>
  );
}

export default App;
