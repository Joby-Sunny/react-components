import React from "react";
import PropTypes from "prop-types";
import { GelDragDropContext } from "../GelDragDrop.utils";
import "./style.scss";

/**
 * GelDragDrop - GelHolder
 *  - Cell the render the GelHolder where a gel items are initally stored.
 */
export function GelHolder(props) {
  const { height } = React.useContext(GelDragDropContext);
  const style = { height: `${height.gelHolderBox}px` };

  return (
    <div className={props.className}>
      <div className={`${props.className}_gelBox`} style={style}></div>
    </div>
  );
}

GelHolder.propTypes = {
  /**
   * ClassName to be set for the cell;
   */
  className: PropTypes.string,
};

GelHolder.defaultProps = {};
