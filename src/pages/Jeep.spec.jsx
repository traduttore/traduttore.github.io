import React from "react"
import { shallow } from "enzyme"

import Jeep from "./Jeep.jsx"

describe("Resume", () => {
  it.only("renders", () => {
    const sut = shallow(<Jeep />)
    expect(sut.find("article").exists()).toBeTruthy()
  })
})
