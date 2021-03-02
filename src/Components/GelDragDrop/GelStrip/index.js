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

  return (
    <div
      className={`gelStrip__item${props.gelType.toLowerCase()}`}
      style={style}
    >
      {props.gelType === GEL_TYPE.LABEL ? `${props.value} bp` : null}
    </div>
  );
}

GelStrip.propTypes = {
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
