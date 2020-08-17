import React from "react";
import classNames from "classnames";
import style from "./uiButton.module.scss";

interface UiButtonProps {
  ariaLabel: string;
  buttonText: string;
  elementTag?: string;
  href?: string;
  subText?: string;
  className?: string;
  onClick?: () => void;
}

export const UiButton: React.FC<UiButtonProps> = ({
  elementTag,
  buttonText,
  ariaLabel,
  className,
  onClick,
}: UiButtonProps): JSX.Element => {
  const scssClassNames = classNames(style.uiButton, className);
  const Tag: any = elementTag ? elementTag : "button";

  return (
    <Tag
      className={scssClassNames}
      onClick={onClick}
      type="submit"
      aria-label={ariaLabel}
    >
      {buttonText}
    </Tag>
  );
};
