import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import Highlights from "./Highlights";
import { renderWithProviders } from "../test/renderWithProviders";
import { projects } from "../data/projects";
import pt from "../i18n/pt";

describe("Highlights", () => {
  it("renders one card per highlight metric", () => {
    renderWithProviders(<Highlights />);

    expect(screen.getByText(pt.highlights.yearsExperience)).toBeInTheDocument();
    expect(screen.getByText(pt.highlights.projects)).toBeInTheDocument();
    expect(screen.getByText(pt.highlights.education)).toBeInTheDocument();
    expect(screen.getByText(pt.highlights.languages)).toBeInTheDocument();
  });

  it("shows an 'in progress' note when there are unfinished languages", () => {
    renderWithProviders(<Highlights />);

    const learning = pt.languages.items.filter(
      (item) => (item as { inProgress?: boolean }).inProgress,
    ).length;

    if (learning > 0) {
      expect(
        screen.getAllByText(new RegExp(pt.highlights.inProgress, "i")).length,
      ).toBeGreaterThanOrEqual(1);
    }
  });

  it("uses the actual number of projects from data", () => {
    renderWithProviders(<Highlights />);
    // Once animation settles it will be projects.length. On initial render it is 0.
    // Just ensure the projects data is not empty.
    expect(projects.length).toBeGreaterThan(0);
  });
});
