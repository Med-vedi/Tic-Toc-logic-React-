import React, { useState } from "react";
import "./VideoFooter.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const VideoFooter = ({url, seller, description, likes}) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>{seller}</h3>
        <p>{description}</p>
      </div>
      <div className="videoFooter__Buttons">
        {liked ? <FavoriteIcon fontSize='large' onClick={e=>setLiked(false)}/> : <FavoriteBorderIcon fontSize='large' onClick={e=>setLiked(true)}/>}
      <p>{liked? likes+1:likes}</p>
      </div>
    </div>
  );
};

export default VideoFooter;
