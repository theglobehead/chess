import React from 'react';
import '../styles/FlipCard.css';

function FlipCard(props) {
  let imgClass = "CardImg "
  let backgroundClass = "flip-card "
  
  if(props.theme == "light"){
    backgroundClass += "LightBack"
    imgClass += "DarkImg"
  }else{
    backgroundClass += "DarkBack"
    imgClass += "LightImg"
  }

  return (
    <div class={backgroundClass} tabIndex="0">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img class={imgClass} src={props.image}/>
        </div>
        <div class="flip-card-back">
          <h4>{props.piece}</h4>
          <p>{props.paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;