import React from "react";
import PropTypes from "prop-types";
import { GelDragDropContext } from "../GelDragDrop.utils";
import "./style.scss";

/**
 * GelDragDrop - TrashCan
 *  - Cell that renders the top Label
 */
export function TrashCan(props) {
  const { height } = React.useContext(GelDragDropContext);
  const style = { height: `${height.trashRow}px` };

  return <div className={props.className} style={style}></div>;
}

TrashCan.propTypes = {
  /**
   * ClassName to be set for the cell;
   */
  className: PropTypes.string,
};

TrashCan.defaultProps = {};
