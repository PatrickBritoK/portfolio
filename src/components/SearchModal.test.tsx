import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchModal from "./SearchModal";
import { renderWithProviders } from "../test/renderWithProviders";
import pt from "../i18n/pt";

describe("SearchModal", () => {
  it("shows the hint when the input is empty", () => {
    renderWithProviders(<SearchModal onClose={() => {}} />);
    expect(screen.getByText(pt.search.hint)).toBeInTheDocument();
  });

  it("filters results based on the query", async () => {
    const user = userEvent.setup();
    renderWithProviders(<SearchModal onClose={() => {}} />);

    const input = screen.getByPlaceholderText(pt.search.placeholder);
    await user.type(input, "java");

    // Java itself should appear as a technology result
    expect(await screen.findAllByText(/java/i)).not.toHaveLength(0);

    // The Technologies group label should be visible
    expect(screen.getByText(pt.search.categories.technology)).toBeInTheDocument();
  });

  it("shows the empty state when nothing matches", async () => {
    const user = userEvent.setup();
    renderWithProviders(<SearchModal onClose={() => {}} />);

    const input = screen.getByPlaceholderText(pt.search.placeholder);
    await user.type(input, "zzzzzzzzzzzz");

    expect(await screen.findByText(pt.search.empty)).toBeInTheDocument();
  });
});
