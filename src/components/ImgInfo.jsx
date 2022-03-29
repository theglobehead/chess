import React from 'react';
import "../styles/ImgInfo.css"


function ImgInfo(props) {
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
          <p>{props.text}</p>
        </div>
        <img class="ImgInfoImg" src={props.img}/>
      </div>
  );
}

export default ImgInfo;