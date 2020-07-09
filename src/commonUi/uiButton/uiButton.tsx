import React from "react";
import classNames from "classnames";
import style from "./uiButton.module.scss";

interface UiButtonProps {
  buttonText: string;
  subText?: string;
  className?: string;
}

enum UiButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export const UiButton: React.FC<UiButtonProps> = ({
  buttonText,
  subText,
  className,
}: UiButtonProps): JSX.Element => {
  let scssClassNames = classNames(style.uiButton, className);
  return (
    <div className={scssClassNames}>
      <button type="submit">{buttonText}</button>
    </div>
  );
};
