import React from "react";
import PropTypes from "prop-types";
import { GelDragDropContext } from "../GelDragDrop.utils";
import { getGelStripStyle } from "./GelStrip.utils";
import { GEL_TYPE } from "../GelDragDrop.constants";
import "./style.scss";

/**
 * GelDragDrop - GelStrip
 *  - The strip of gel that is dragged/dropped ovel GelPath
 */
export function GelStrip(props) {
  const { height } = React.useContext(GelDragDropContext);
  const style = getGelStripStyle(height, props);

  const setInnerText = () => {
    let text = null;
    if (props.gelType === GEL_TYPE.LABEL) text = `${props.value} bp`;
    return text;
  };

  const setDraggable = () => props.gelType === GEL_TYPE.DRAGGABLE;

  const onDragStart = (event) => {
    event.dataTransfer.setData("text", `${props.gelId}_123`);
    event.dataTransfer.setDragImage(
      event.target,
      event.target.clientWidth / 2,
      0
    );
  };

  return (
    <div
      draggable={setDraggable()}
      onDragStart={onDragStart}
      className={`${props.className}${props.gelType.toLowerCase()}`}
      style={style}
    >
      {setInnerText()}
    </div>
  );
}

GelStrip.propTypes = {
  /**
   * Classname to be set on component
   */
  className: PropTypes.string,
  /**
   * Unique id for Gel Strip
   */
  gelId: PropTypes.number,
  /**
   * Type of Gel Strip
   */
  gelType: PropTypes.string,
  /**
   * Height of Gel Strip
   */
  height: PropTypes.number,
  /**
   * opacity of Gel Strip
   */
  opacity: PropTypes.number,
  /**
   * Position value of Gel Strip
   */
  value: PropTypes.number,
};
