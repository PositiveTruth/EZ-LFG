import * as React from "react";
import PropTypes, { InferProps } from "prop-types";
import { proggressbarStyle } from "./uiProgressbarStyle";

/**
 * Allows for dynamic changes for:
 - percentage
 - color of the bar
 - color of the unlighted part
 - show percentage or not
 */

// export interface ProgressProps {
//   progressValue: number,
//   percentageVisible: boolean,
//   progressColor: string,
//   unfilledColor: string
// }

export function uiProgressbar({
  progressValue,
  percentageVisible,
  progressColor,
  unfilledColor,
}: InferProps<typeof uiProgressbar.propTypes>) {
  return (
    <div className="progress-wrapper">
      <div className="progress-bar" css={proggressbarStyle}></div>
      {percentageVisible && (
        <div className="progress-value">{progressValue}</div>
      )}
    </div>
  );
}

uiProgressbar.propTypes = {
  progressValue: PropTypes.number.isRequired,
  percentageVisible: PropTypes.bool,
  progressColor: PropTypes.string,
  unfilledColor: PropTypes.string,
};

uiProgressbar.defaultProps = {
  percentageVisible: true,
  progressColor: "#46A4f8",
  unfilledColor: "#FFFFFF",
};
