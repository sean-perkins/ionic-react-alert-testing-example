import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import Home from "./Home";

test("renders without crashing", () => {
  const { baseElement } = render(<Home />);
  expect(baseElement).toBeDefined();
});

test("removes an item from the list", async () => {
  const {} = render(<Home />);

  expect(screen.getByText(/Item 1/i)).toBeInTheDocument();

  const removeButton = screen.getAllByText(/Remove Item/i);
  removeButton[0].click();

  await waitFor(() => {
    const confirmButton = screen.getByText(/yes, remove it/i);
    confirmButton.click();
  });

  expect(screen.queryByText(/Item 1/i)).not.toBeInTheDocument();
});
