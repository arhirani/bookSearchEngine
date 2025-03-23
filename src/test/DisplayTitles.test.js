import React from "react";
import { render } from "@testing-library/react";
import SearchContainer from "../components/SearchContainer";

describe("#SearchContainer", () => {
  it("should render with values when title is provided", () => {
    let displayTitles = {
      inputQuery: null,
      query: "is your problems",
      onQueryChange: () => "is your",
      results: [{ title: "SampleTitle" }],
      setTitle: () => "SampleTitle",
      display: true,
    };
    const { container } = render(<SearchContainer {...{ ...displayTitles }} />);
    expect(container.querySelector(".displayResults").textContent).toEqual(
      "SampleTitle"
    );
  });
  it("should render empty string when given no value", () => {
    let displayTitles = {
      inputQuery: null,
      query: "is your problems",
      onQueryChange: () => "is your",
      results: [],
      setTitle: () => "SampleTitle",
      display: true,
    };
    const { container } = render(<SearchContainer {...{ ...displayTitles }} />);
    expect(container.querySelector(".displayResults").textContent).toEqual("");
  });
  it("should render with multiple items when results has multiple items", () => {
    let displayTitles = {
      inputQuery: null,
      query: "is your problems",
      onQueryChange: () => "is your",
      results: [{ title: "SampleTitle1" }, { title: "SampleTitle2" }],
      setTitle: () => "SampleTitle",
      display: true,
    };
    const { container } = render(<SearchContainer {...{ ...displayTitles }} />);
    expect(container.querySelector(".displayResults").textContent).toEqual(
      "SampleTitle1SampleTitle2"
    );
  });
});
