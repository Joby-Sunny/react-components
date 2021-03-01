import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * GelDragDrop - LabelCell
 *  - Cell that renders the top Label
 */
export function LabelCell(props) {
  return (
    <div className={props.className}>
      <p className={`${props.className}_label`}>{props.label}</p>
    </div>
  );
}

LabelCell.propTypes = {
  /**
   * ClassName to be set for the cell;
   */
  className: PropTypes.string,
  /**
   * Label to dispaly on the cel
   */
  label: PropTypes.string,
};

LabelCell.defaultProps = {};
