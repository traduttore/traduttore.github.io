import React from "react"
import { shallow } from "enzyme"

import Blog from "./Blog.jsx"

describe("Resume", () => {
  it.only("renders with a title and a nav", () => {
    const sut = shallow(<Blog />)
    expect(sut.find("h1").exists()).toBeTruthy()
    expect(sut.find("nav").exists()).toBeTruthy()
  })
})
