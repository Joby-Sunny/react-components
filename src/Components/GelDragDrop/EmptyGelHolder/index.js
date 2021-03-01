import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * GelDragDrop - EmptyGelHolder
 *  - Cell that render and empty box
 */
export function EmptyGelHolder(props) {
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    const { offsetWidth } = document.querySelector(".gelDragDrop");
    const gelPathHeight = (offsetWidth * 50) / 100;
    const gelBoxHeight = gelPathHeight / 10;
    let height = `${gelBoxHeight}px`;
    setStyle({ height });
  }, []);

  return <div className={props.className} style={style}></div>;
}

EmptyGelHolder.propTypes = {
  /**
   * ClassName to be set for the cell;
   */
  className: PropTypes.string,
};

EmptyGelHolder.defaultProps = {};
