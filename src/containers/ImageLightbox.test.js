import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  const mockState = { ...initState };
  mockState.toggleOpen = true;
  const { container } = render(
    <ImageLightbox data={data} localState={mockState} />
  );
  expect(container.querySelector("#lightbox")?.className).toEqual("");
});

test("testing click events (close/prev/next) on ImageLightbox", async () => {
  const user = userEvent.setup();
  const { container } = render(
    <ImageLightbox data={data} localState={initState} />
  );

  // open lightbox
  expect(container.querySelector("#lightbox")?.className).toEqual("close");
  await user.click(container.querySelectorAll(".thumbnail")?.[0]);
  expect(container.querySelector("#lightbox")?.className).toEqual("");
  expect(screen.getByText("Spring Mountains")).toBeInTheDocument();

  // click next
  await user.click(screen.getByText("NEXT >>"));
  expect(screen.getByText("Fall Mountains")).toBeInTheDocument();

  // click prev
  await user.click(screen.getByText("<< PREV"));
  expect(screen.getByText("Spring Mountains")).toBeInTheDocument();

  // click close
  await user.click(screen.getByText("X"));
  expect(container.querySelector("#lightbox")?.className).toEqual("close");
});
