import React from "react"
import renderer from "react-test-renderer"
import { shallow } from "enzyme"

import CallingCard from "./CallingCard.jsx"

describe("Calling Card", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CallingCard />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders with an image", () => {
    const sut = shallow(<CallingCard />)
    expect(sut.find("img").exists()).toBe(true)
  })
})
