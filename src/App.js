import React, { useState, useEffect } from "react";
import "./App.css";
import { Video } from "./components/Video";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [videos]); 
  // console.log();
  return (
    <div className="app">
      <h1>
        Let's make it!<span>🚀</span>
      </h1>
      <div className="app__videos">
        {videos.map(({ url, description, seller, likes }) => (
          <Video
            url={url}
            likes={likes}
            description={description}
            seller={seller}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
