export function getGelStripStyle(height, props) {
  return {
    height: `${(height.gelHolderBox * props.height) / 100}px`,
    left: "8px",
    top: `${((1000 - props.value) * height.gelPath) / 1000}px`,
    width: `calc(100% - 16px)`,
  };
}
