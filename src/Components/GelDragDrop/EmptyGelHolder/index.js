import React from "react";
import PropTypes from "prop-types";
import { GelDragDropContext } from "../GelDragDrop.utils";
import "./style.scss";

/**
 * GelDragDrop - EmptyGelHolder
 *  - Cell that render and empty box
 */
export function EmptyGelHolder(props) {
  const { height } = React.useContext(GelDragDropContext);
  const style = { height: `${height.gelHolderBox}px` };

  return <div className={props.className} style={style}></div>;
}

EmptyGelHolder.propTypes = {
  /**
   * ClassName to be set for the cell;
   */
  className: PropTypes.string,
};

EmptyGelHolder.defaultProps = {};
