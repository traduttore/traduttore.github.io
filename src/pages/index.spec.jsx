import React from "react"
import { shallow } from "enzyme"

import IndexPage from "./index.jsx"

describe("Resume", () => {
  it.only("renders with a title and a Welcome component", () => {
    const sut = shallow(<IndexPage />)

    expect(sut.find("h1").exists()).toBeTruthy()
    expect(sut.find("Welcome").exists()).toBeTruthy()
  })
})
