import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * GelDragDrop - GelPath
 *  - Cell the render the GelPath where a gel item may be dragged and dropped
 *    to correct value.
 */
export function GelPath(props) {
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    const { offsetWidth } = document.querySelector(".gelDragDrop");
    let height = `${(offsetWidth * 50) / 100}px`;
    setStyle({ height });
  }, []);
  return <div style={style} className={props.className}></div>;
}

GelPath.propTypes = {
  /**
   * ClassName to be set for the cell;
   */
  className: PropTypes.string,
};

GelPath.defaultProps = {};
