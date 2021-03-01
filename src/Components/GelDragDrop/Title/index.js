import React from "react";
import "./style.scss";

export function Title(props) {
  return <h5 className="gelDragDrop_title">{props.title}</h5>;
}

Title.propTypes = {};

Title.defaultProps = {
  title: "Drag the results you predict into each lane",
};
