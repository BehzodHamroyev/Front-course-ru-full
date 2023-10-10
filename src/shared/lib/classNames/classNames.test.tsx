import { screen, render } from "@testing-library/react";

import { Button } from "../../ui/Button/Button";
describe("classNames", () => {
  it("with only first param", () => {
    render(<Button>salom</Button>);
    expect(screen.getAllByText).toBeInTheDocument;
  });
});
