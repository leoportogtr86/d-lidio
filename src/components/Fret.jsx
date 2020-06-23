import React from "react";

export default (props) => {
  return (
    <div>
      <iframe src={props.src} width="100%" height="375" />
    </div>
  );
};
