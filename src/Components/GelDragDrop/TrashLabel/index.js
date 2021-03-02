import React from "react";
import PropTypes from "prop-types";
import TrashCan from "./Trash.svg";
import { GelDragDropContext } from "../GelDragDrop.utils";
import "./style.scss";

/**
 * GelDragDrop - TrashLabel
 *  - Cell that renders the top Label
 */
export function TrashLabel(props) {
  const { height } = React.useContext(GelDragDropContext);
  const style = { height: `${height.trashRow}px` };

  return (
    <div className={props.className} style={style}>
      <img
        className={`${props.className}_label`}
        src={TrashCan}
        alt="trash can"
      />
    </div>
  );
}

TrashLabel.propTypes = {
  /**
   * ClassName to be set for the cell;
   */
  className: PropTypes.string,
};

TrashLabel.defaultProps = {};
