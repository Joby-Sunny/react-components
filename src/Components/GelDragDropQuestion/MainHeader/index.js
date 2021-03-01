import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * GelDragDropQuestion-MainHeader
 *  - header section for the GelDragDropQuestion Component.
 */
export function MainHeader(props) {
  return (
    <>
      <h6 className="geldragdropquestion_title">Prediction Question</h6>
      <h5 className="geldragdropquestion_header">{props.heading}</h5>
      <p className="geldragdropquestion_text">{props.text}</p>
    </>
  );
}

MainHeader.propTypes = {
  /**
   * Main heading for the quetion
   */
  heading: PropTypes.string,
  /**
   * Detailed description for the question
   */
  text: PropTypes.string,
};
