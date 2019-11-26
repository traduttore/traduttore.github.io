import React from "react"
import { shallow } from "enzyme"

import Contact from "./Contact.jsx"

describe("Resume", () => {
  it.only("renders", () => {
    const sut = shallow(<Contact />)
    expect(sut.find("h1").exists()).toBeTruthy()
  })
})
