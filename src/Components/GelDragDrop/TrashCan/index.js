import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * GelDragDrop - TrashCan
 *  - Cell that renders the top Label
 */
export function TrashCan(props) {
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    const { offsetWidth } = document.querySelector(".gelDragDrop");
    const trashRowHeight = (offsetWidth * 10) / 100;
    let height = `${trashRowHeight}px`;
    setStyle({ height });
  }, []);

  return <div className={props.className} style={style}></div>;
}

TrashCan.propTypes = {
  /**
   * ClassName to be set for the cell;
   */
  className: PropTypes.string,
};

TrashCan.defaultProps = {};
