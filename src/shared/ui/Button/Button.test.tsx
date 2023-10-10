import { classNames } from "../../lib/classNames/classNames";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
describe("Tess Button", () => {
  it("should one parrametr", () => {
    render(<Button>test</Button>);
    expect(screen.getByText).toBeInTheDocument;
  });
});
