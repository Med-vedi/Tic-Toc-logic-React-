import React, { useRef } from "react";
import "./Video.css";
import img from "../image/adi1.jpg";
import cls from "classnames";
import clip from "../image/stor.mp4";
import { useState } from "react";

export const Video = () => {
  const videoRef = useRef(null);

  const [play, setPlay] = useState(false)
  const [isOpen, setOpen] = useState(false);

  // let video__classes = {'video__player', 'video__player_open': isOpen}

  const handlePostClick = () => {
    setOpen((s) => !s);
  };

  const onVideoPress = () => {
      if(play){
        handlePostClick();
        videoRef.current.pause();
        setPlay(false)
      }else{
        handlePostClick();
        videoRef.current.play();
        setPlay(true)
      }
    
  };
  return (
    <div className={cls(`video`, { video__open: isOpen })}>
      <video
        className={cls(`video__player`)}
        // loop
        onClick={onVideoPress}
        ref={videoRef}
        src={clip}
      ></video>
      {/* <img src={img} alt="photo" className="video__player"/> */}
      {/* <VideoFooter/> */}
      {/* <VideoSidebar/> */}
    </div>
  );
};
