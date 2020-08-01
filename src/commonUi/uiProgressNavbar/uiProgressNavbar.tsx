import * as React from "react";
import PropTypes, { InferProps } from "prop-types";
import { proggressbarStyle } from "./uiProgressNavbarStyle.js";

/**
 * Allows for dynamic changes for:
 - menu items
 - Highlight color
 */

export function uiProgressNavbar({
  navItems,
  highlightColor,
}: InferProps<typeof uiProgressNavbar.propTypes>) {
  return <div className="progress-wrapper"></div>;
}

uiProgressNavbar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.string),
  highlightColor: PropTypes.string,
};

uiProgressNavbar.defaultProps = {
  navItems: [],
  highlightColor: "#46A4f8",
};
