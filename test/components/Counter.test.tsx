import { describe, it, expect } from "vitest";
import { render, fireEvent, waitFor, screen } from "@testing-library/preact";

import { Counter } from "../../src/components";

describe("Counter", () => {
  it("should display initial count", () => {
    // GHCP
    // const { getByText } = render(<Counter initialCount={5} />);
    // expect(getByText("Current value: 5")).toBeTruthy();

    const { container } = render(<Counter initialCount={5} />);
		expect(container.textContent).toMatch('Current value: 5');
  });

  it('should increment after "Increment" button is clicked', async () => {
    // GHCP
    // const { getByText, getByRole } = render(<Counter initialCount={5} />);
    // fireEvent.click(getByRole("button"));
    // expect(getByText("Current value: 6")).toBeTruthy();

    render(<Counter initialCount={5} />);

		fireEvent.click(screen.getByText('Increment'));
		await waitFor(() => {
			expect(screen.getByText('Current value: 6')).toBeInTheDocument();
		});
  });
});
