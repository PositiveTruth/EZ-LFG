import * as React from "react";
import { render } from "@testing-library/react";
import {
  UiButton,
  UiButtonProps,
} from "../../../src/commonUi/uiButton/uiButton";

let mockUiButtonProps: UiButtonProps;

describe("uiButton UI tests", () => {
  beforeEach(() => {
    mockUiButtonProps = {
      ariaLabel: "submit button",
      buttonText: "Submit",
    };
  });

  it("should render the uiButton", () => {
    const { getByTestId } = render(<UiButton {...mockUiButtonProps} />);
    const uiButton = getByTestId("uiButton");
    expect(uiButton).toBeInTheDocument();
  });

  it("should render the correct text", () => {
    const { getByTestId } = render(<UiButton {...mockUiButtonProps} />);
    const uiButton = getByTestId("uiButton");
    expect(uiButton).toHaveTextContent("Submit");
    expect(uiButton).toHaveAttribute("aria-label", "submit button");
  });

  it("should be able to change elementTag when provided", () => {
    mockUiButtonProps.elementTag = "div";
    const { container } = render(<UiButton {...mockUiButtonProps} />);
    const uiButtonWithButtonElementTag = container.querySelector("button");
    const uiButtonWithDivElementTag = container.querySelector("div");
    expect(uiButtonWithButtonElementTag).toBeNull();
    expect(uiButtonWithDivElementTag).toBeInTheDocument();
  });
});
