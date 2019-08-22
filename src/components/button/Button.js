import React from "react";
import "./Button.css";

export default props => {
  return (
    <button className="button" onClick={props.click}>
      {props.label}
    </button>
  );
};
