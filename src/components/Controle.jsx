import React from "react";

export default (props) => {
  return (
    <div>
      <form action="">
        <label htmlFor="tonalidade" className="text-danger m-3" value = {props.valorTonalidade} onChange = {props.onChangeTonalidade}>
          {props.tonalidadeControle}
        </label>
        <input type="range" min="1" max="7" />
      </form>

      <form action="">
        <label htmlFor="modo" className="text-danger m-3" value = {props.valorModo} onChange = {props.onChangeModo}>
          {props.modoControle}
        </label>
        <input type="range" min="1" max="7" />
      </form>
    </div>
  );
};
