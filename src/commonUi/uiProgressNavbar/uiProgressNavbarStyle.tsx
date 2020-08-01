import CSS from "csstype";

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

export const proggressbarStyle: Style = {
  padding: "4px",
  "min-width": "10%",
  overflow: "hidden",
  "white-space": "nowrap",
  "-webkit-border-radius": "20px",
  "-moz-border-radius": "20px",
  "border-radius": "20px",
  "background-color": "#f63a0f",
  transition: "2s linear",
  "transition-property": "width, background-color",
  "box-shadow":
    "0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1)",
};
