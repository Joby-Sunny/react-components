import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * GelDragDropQuestion - SubmitBlock
 *  - The bootom section of GelDragDropComponent that contains the submit button.
 */
export function SubmitBlock(props) {
  return (
    <div className="geldragdropquestion_submitBlock">
      <button
        className="geldragdropquestion_submitBlock"
        disabled={props.disabled}
        onClick={props.onSubmit}
      >
        Submit
      </button>
    </div>
  );
}

SubmitBlock.propTypes = {
  /**
   * Boolean to set the buttom disable/enable
   */
  disabled: PropTypes.bool,
  /**
   * Function to execute when submit button is clicked
   */
  onSubmit: PropTypes.func,
};
