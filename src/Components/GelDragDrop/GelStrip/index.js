import React from "react";
import PropTypes from "prop-types";
import { GelDragDropContext } from "../GelDragDrop.utils";
import { getGelStripStyle } from "./GelStrip.utils";
import { GEL_TYPE, GEL_DRAG_DROP } from "../GelDragDrop.constants";
import "./style.scss";

/**
 * GelDragDrop - GelStrip
 *  - The strip of gel that is dragged/dropped ovel GelPath
 */
export function GelStrip(props) {
  const { height, limit } = React.useContext(GelDragDropContext);
  const style = getGelStripStyle({ height, props, limit });

  const setDraggable = () => props.gelType === GEL_TYPE.DRAGGABLE;

  const onDragStart = (event) => {
    event.dataTransfer.setData(GEL_DRAG_DROP.GEL_ID, props.gelId);
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
      {props.children}
    </div>
  );
}

GelStrip.propTypes = {
  /**
   * Text to render inside GelStrip
   */
  children: PropTypes.string || null,
  /**
   * Classname to be set on component
   */
  className: PropTypes.string,
  /**
   * Unique Id for Gel
   */
  gelId: PropTypes.string,
  /**
   * Type of Gel-Strip
   */
  gelType: PropTypes.oneOf(["LABEL", "DRAGGABLE", "FIXED"]),
  /**
   * Height value go Gel
   */
  height: PropTypes.number,
  /**
   * Opacity value of Gel
   */
  opacity: PropTypes.number,
  /**
   * Postion value of Gel
   */
  value: PropTypes.number || null,
};
