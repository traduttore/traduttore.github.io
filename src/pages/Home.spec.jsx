import React from "react"
import { shallow } from "enzyme"

import Home from "./Home.jsx"

describe("Resume", () => {
  it.only("renders", () => {
    const sut = shallow(<Home />)
    expect(sut.find("article").exists()).toBeTruthy()
  })
})
