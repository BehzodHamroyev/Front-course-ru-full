import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("test Counter components", () => {
  it("shoul increment ", () => {
    render(<Counter />);
    expect(screen.getByTestId("valueCounter")).toHaveTextContent("10");
    expect(screen.getByTestId("increment-btn").click);
    expect(screen.getByTestId("valueCounter")).toHaveTextContent("11");
  });
});
