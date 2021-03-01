import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * GelDragDrop - GelHolder
 *  - Cell the render the GelHolder where a gel items are initally stored.
 */
export function GelHolder(props) {
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    const { offsetWidth } = document.querySelector(".gelDragDrop");
    const gelPathHeight = (offsetWidth * 50) / 100;
    const gelBoxHeight = gelPathHeight / 10;
    let height = `${gelBoxHeight}px`;
    setStyle({ height });
  }, []);

  return (
    <div className={props.className}>
      <div className={`${props.className}_gelBox`} style={style}></div>
    </div>
  );
}

GelHolder.propTypes = {
  /**
   * ClassName to be set for the cell;
   */
  className: PropTypes.string,
};

GelHolder.defaultProps = {};
