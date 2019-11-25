import React from "react"
import { shallow } from "enzyme"

import Resume from "./Resume.jsx"

describe("Resume", () => {
  it.only("renders with a title and pdf", () => {
    const sut = shallow(<Resume />);
    console.log(sut.debug());
    expect(sut.find('h1').exists()).toBeTruthy();
    expect(sut.find('embed').exists()).toBeTruthy();
  });
});
