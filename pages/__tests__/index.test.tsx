import { render } from "@testing-library/react";
import App from "../index.js";
import React from "react";

describe("With React Testing Library", () => {
  it('Shows "Hello world!"', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent(/Hello/i);
  });
});

describe("With React Testing Library Snapshot", () => {
  it("Should match Snapshot", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
