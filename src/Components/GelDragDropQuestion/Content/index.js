import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * GelDragDropQuestion - Content
 *  - A wrapper for DragDropGel component in Question Component.
 */
export function Content(props) {
  return <div className="geldragdropquestion_content">{props.children}</div>
}

Content.propTypes = {
  /**
   * The GelDragDrop component
   */
  children: PropTypes.element,
};

Content.defaultProps = {};
