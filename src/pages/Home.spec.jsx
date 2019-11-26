import React from "react"
import { shallow } from "enzyme"

import Home from "./Home.jsx"

describe("Home", () => {
  it("renders", () => {
    const sut = shallow(<Home />)
    expect(sut.find("article").exists()).toBeTruthy()
  });

  describe("dropdowns", () => {
    it("opens and closes coop1", () => {
        const sut = shallow(<Home />)
        expect(sut.state('coopOneIsOpen')).toBeFalsy();
        sut.find("input").at(0).simulate('click');
        expect(sut.state('coopOneIsOpen')).toBeTruthy();
        sut.find("input").at(0).simulate('click');
        expect(sut.state('coopOneIsOpen')).toBeFalsy();
    });

    it("opens and closes coop2", () => {
        const sut = shallow(<Home />)
        expect(sut.state('coopTwoIsOpen')).toBeFalsy();
        sut.find("input").at(1).simulate('click');
        expect(sut.state('coopTwoIsOpen')).toBeTruthy();
        sut.find("input").at(1).simulate('click');
        expect(sut.state('coopTwoIsOpen')).toBeFalsy();
    });

    it("opens and closes coop3", () => {
        const sut = shallow(<Home />)
        expect(sut.state('coopThreeIsOpen')).toBeFalsy();
        sut.find("input").at(2).simulate('click');
        expect(sut.state('coopThreeIsOpen')).toBeTruthy();
        sut.find("input").at(2).simulate('click');
        expect(sut.state('coopThreeIsOpen')).toBeFalsy();
    });

    it("opens coop3 then coop2, coop3 closes", () => {
        const sut = shallow(<Home />)
        sut.find("input").at(2).simulate('click');
        expect(sut.state('coopThreeIsOpen')).toBeTruthy();
        sut.find("input").at(1).simulate('click');
        expect(sut.state('coopThreeIsOpen')).toBeFalsy();
    });
  });

  describe("hover", () => {
    it("opens and closes coop1 popover but doesnt try and open an open popover", () => {
        const sut = shallow(<Home />)
        expect(sut.state('hoverCoopOne')).toBeFalsy();
        sut.find("input").at(0).simulate('mouseenter');
        expect(sut.state('hoverCoopOne')).toBeTruthy();
        sut.find("input").at(0).simulate('mouseenter');
        expect(sut.state('hoverCoopOne')).toBeTruthy();
        sut.find("input").at(0).simulate('mouseleave');
        expect(sut.state('hoverCoopOne')).toBeFalsy();
        sut.find("input").at(0).simulate('mouseleave');
        expect(sut.state('hoverCoopOne')).toBeFalsy();
    });

    it("opens and closes coop2 popover but doesnt try and open an open popover", () => {
        const sut = shallow(<Home />)
        expect(sut.state('hoverCoopTwo')).toBeFalsy();
        sut.find("input").at(1).simulate('mouseenter');
        expect(sut.state('hoverCoopTwo')).toBeTruthy();
        sut.find("input").at(1).simulate('mouseenter');
        expect(sut.state('hoverCoopTwo')).toBeTruthy();
        sut.find("input").at(1).simulate('mouseleave');
        expect(sut.state('hoverCoopTwo')).toBeFalsy();
        sut.find("input").at(1).simulate('mouseleave');
        expect(sut.state('hoverCoopTwo')).toBeFalsy();
    });

    it("opens and closes coop3 popover but doesnt try and open an open popover", () => {
        const sut = shallow(<Home />)
        expect(sut.state('hoverCoopThree')).toBeFalsy();
        sut.find("input").at(2).simulate('mouseenter');
        expect(sut.state('hoverCoopThree')).toBeTruthy();
        sut.find("input").at(2).simulate('mouseenter');
        expect(sut.state('hoverCoopThree')).toBeTruthy();
        sut.find("input").at(2).simulate('mouseleave');
        expect(sut.state('hoverCoopThree')).toBeFalsy();
        sut.find("input").at(2).simulate('mouseleave');
        expect(sut.state('hoverCoopThree')).toBeFalsy();
    });
  });
})
