import React, { useRef } from "react";
import "./Video.css";
import cls from "classnames";
import clip from "../image/stor.mp4";
import { useState } from "react";
import VideoFooter from "./VideoFooter";

export const Video = ({url, likes, seller, description}) => {
  const videoRef = useRef(null);
  // console.log({url});
  const [playing, setPlaying] = useState(false)
  const [isOpen, setOpen] = useState(false);

  const handlePostClick = () => {
    setOpen((s) => !s);
  };

  const onVideoPress = () => {
      if(playing){
        handlePostClick();
        videoRef.current.pause();
        // setPlaying(false)
      }else{
        handlePostClick();
        videoRef.current.play();
        setPlaying(true)
      }
    
  };
  return (
    <div className={cls(`video`, { video__open: isOpen })}>
      <video
        className={cls(`video__player`)}
        // loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
       

      ></video>
      <VideoFooter  likes={likes}  seller={seller}
        description={description}/>
      {/* <img src={img} alt="photo" className="video__player"/> */}
      {/* <VideoFooter/> */}
      {/* <VideoSidebar/> */}
    </div>
  );
};
