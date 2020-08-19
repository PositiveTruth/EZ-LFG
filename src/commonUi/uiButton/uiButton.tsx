import React from "react";
import classNames from "classnames";
import style from "./uiButton.module.scss";

export interface UiButtonProps {
  ariaLabel: string;
  buttonText: string;
  buttonType?: string;
  elementTag?: string;
  subText?: string;
  className?: string;
  onClick?: () => void;
}

export const UiButton: React.FC<UiButtonProps> = ({
  elementTag,
  buttonText,
  buttonType,
  ariaLabel,
  className,
  onClick,
  ...buttonProps
}: UiButtonProps): JSX.Element => {
  const scssClassNames = classNames(style.uiButton, className);
  const Tag: any = elementTag ? elementTag : "button";
  const type = buttonType ? buttonType : "submit";

  return (
    <Tag
      className={scssClassNames}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      data-testid="uiButton"
      {...buttonProps}
    >
      {buttonText}
    </Tag>
  );
};
