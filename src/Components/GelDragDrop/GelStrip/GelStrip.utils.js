export function getGelStripStyle({ height, props, limit }) {
  return {
    height: `${(height.gelHolderBox * props.height) / 100}px`,
    left: "8px",
    top: `${((limit.top - props.value) * height.gelPath) / limit.difference}px`,
    width: `calc(100% - 16px)`,
  };
}
