import React from "react";
import style from "./uiButton.module.scss";

interface UiButtonProps {
  buttonText: string;
}

enum UiButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export const UiButton: React.FC<UiButtonProps> = ({
  buttonText,
}: UiButtonProps): JSX.Element => {
  return <button className={style.test}>{buttonText}</button>;
};
