import React from 'react';
import "../styles/VideoInfo.css"


function VideoInfo(props) {
  let ImgClass = "ImgInfoText "
  let InfoClass = "ImgInfo "
  
  if(props.imgPos == "right"){
    ImgClass += "ImgRight"
    InfoClass += "InfoRight"
  }else{
    ImgClass += "ImgLeft"
    InfoClass += "InfoLeft"
  }
  
  return (
    <div class={InfoClass}>
        <div class={ImgClass}>
          <h2>{props.title}</h2>
          {props.list}
        </div>
        <div class="VideoDiv">
          <iframe class="VideoBox" src="https://www.youtube.com/embed/ej_fnsdsksA"></iframe>
        </div>
      </div>
  );
}

export default VideoInfo;