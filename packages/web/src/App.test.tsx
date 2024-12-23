import { render, screen } from "@testing-library/react";
import App from "./App";

it("App component renders with Testing Turborepo project text", () => {
  render(<App />);
  expect(screen.getByText(/Testing Turborepo project/i)).toBeInTheDocument();
});
