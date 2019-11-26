import React from "react"
import { shallow } from "enzyme"

import About from "./About.jsx"

describe("About", () => {
  it("renders with a title and an article", () => {
    const sut = shallow(<About />)
    expect(sut.find("h1").exists()).toBeTruthy()
    expect(sut.find("article").exists()).toBeTruthy()
  })
})
