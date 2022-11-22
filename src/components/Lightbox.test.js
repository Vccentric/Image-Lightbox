import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import React from "react";
import Lighbox from "./Lightbox";
import images from "../../data/images";

// setup variables
const toggleOpen = true;
const currentImage = images[0];
const close = jest.fn();
const prev = jest.fn();
const next = jest.fn();

test("renders correctly - snapshot", () => {
  const tree = renderer
    .create(
      <Lighbox
        toggleOpen={toggleOpen}
        currentImage={currentImage}
        close={close}
        prev={prev}
        next={next}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders lightbox toggle open", () => {
  const { container } = render(
    <Lighbox
      toggleOpen={toggleOpen}
      currentImage={currentImage}
      close={close}
      prev={prev}
      next={next}
    />
  );
  expect(container.querySelector("#lightbox")?.className).toEqual("");
  expect(screen.getByText("Spring Mountains")).toBeInTheDocument();
});

test("renders lightbox with different image than default", () => {
  render(
    <Lighbox
      toggleOpen={toggleOpen}
      currentImage={images[1]}
      close={close}
      prev={prev}
      next={next}
    />
  );
  expect(screen.getByText("Fall Mountains")).toBeInTheDocument();
});
