import React from "react"
import { shallow } from "enzyme"

import Callingcard from "./Callingcard.jsx"

describe("Calling Card", () => {
  it("renders", () => {
    const sut = shallow(<Callingcard />);
    expect(sut.find('.container--address').exists()).toBeTruthy();
  });

  it("renders with an image", () => {
    const sut = shallow(<Callingcard />);
    expect(sut.find("img").exists()).toBeTruthy();
  });

  it("renders with external content in the form of an iframe", () => {
    const sut = shallow(<Callingcard />);
    expect(sut.find("iframe").exists()).toBeTruthy();
  });

  it("renders three links in the address section", () => {
    const sut = shallow(<Callingcard />);
    expect(sut.find("address").find('a').length).toBe(3);
  });
});
