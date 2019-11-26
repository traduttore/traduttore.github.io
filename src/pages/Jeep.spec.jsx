import React from "react"
import { shallow } from "enzyme"

import Jeep , { scrollToRef } from "./Jeep.jsx"

describe("Jeep", () => {
  it("renders", () => {
    const sut = shallow(<Jeep />);
    expect(sut.find("article").exists()).toBeTruthy();
  });

  it("scrolls to beginning of text", () => {
    const sut = shallow(<Jeep />);

    global.scrollTo = jest.fn()

    expect(sut.find("button").exists()).toBeTruthy();
    sut.find("button").simulate('click');
    expect(global.scrollTo).toHaveBeenCalledTimes(1);
    expect(global.scrollTo).toHaveBeenCalledWith(0, 100);
  });

  it("test scrollToRef", () => {
    global.scrollTo = jest.fn()

    scrollToRef({current : {offsetTop : 200}})
    expect(global.scrollTo).toHaveBeenCalledTimes(1);
    expect(global.scrollTo).toHaveBeenCalledWith(0, 200);
  });
})
