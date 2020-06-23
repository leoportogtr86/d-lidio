import React from "react";
import './Backing.css'


export default (props) => {
  return (
    <div>
      <iframe
        className = 'backing'
        width="560"
        height="315"
        src={props.src}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
