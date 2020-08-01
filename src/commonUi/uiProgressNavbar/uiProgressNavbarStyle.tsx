import CSS from "csstype";

export const proggressbarStyle: CSS.Properties = {
  padding: "4px",
  minWidth: "10%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  // "-webkit-border-radius": "20px",
  // "-moz-border-radius": "20px",
  borderRadius: "20px",
  backgroundColor: "#f63a0f",
  transition: "2s linear",
  transitionProperty: "width, background-color",
  boxShadow:
    "0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1)",
};
