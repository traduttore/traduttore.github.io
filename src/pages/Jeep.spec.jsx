import React from "react"
import { shallow } from "enzyme"

import Jeep, { scrollToRef } from "./Jeep.jsx"

describe("Jeep", () => {
  it("renders", () => {
    const sut = shallow(<Jeep />)
    expect(sut.find("article").exists()).toBeTruthy()
  })

  it("scrolls to beginning of text", () => {
    const sut = shallow(<Jeep />)

    window.scrollTo = jest.fn()

    expect(sut.find("button").exists()).toBeTruthy()
    sut.find("button").simulate("click")
    expect(window.scrollTo).toHaveBeenCalledTimes(1)
    expect(window.scrollTo).toHaveBeenCalledWith(0, 100)
  })

  it("test scrollToRef", () => {
    window.scrollTo = jest.fn()

    scrollToRef({ current: { offsetTop: 200 } })
    expect(window.scrollTo).toHaveBeenCalledTimes(1)
    expect(window.scrollTo).toHaveBeenCalledWith(0, 200)
  })
})
