import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import React from "react";
import ImageLightbox from "./ImageLightbox";
import images from "../../data/images";

// setup variables
const data = { images };
const initState = {
  toggleOpen: false,
  currentIndex: 0,
};

test("renders correctly - snapshot", () => {
  const tree = renderer
    .create(<ImageLightbox data={data} localState={initState} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders image lightbox with lightbox toggle closed", () => {
  const { container } = render(
    <ImageLightbox data={data} localState={initState} />
  );
  expect(container.querySelector("#lightbox")?.className).toEqual("close");
});

test("renders image lightbox with lightbox toggle open", () => {
  const mockState = initState;
  mockState.toggleOpen = true;
  const { container } = render(
    <ImageLightbox data={data} localState={mockState} />
  );
  expect(container.querySelector("#lightbox")?.className).toEqual("");
});
