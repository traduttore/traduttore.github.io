import React from "react"
import { shallow } from "enzyme"

import Header from "./Header.jsx"

describe("Header", () => {
  it("renders", () => {
    const sut = shallow(<Header />);
    expect(sut.find('nav').exists()).toBeTruthy();
  });

  it("renders 5 nav items", () => {
    const sut = shallow(<Header />);
    expect(sut.find('NavItem').length).toBe(5);
  });

  it("renders a button to toggle the nav open and closed", () => {
    const sut = shallow(<Header />);
    expect(sut.state('dropDownIsOpen')).toBeFalsy();
    sut.find('NavbarToggler').simulate('click');
    expect(sut.state('dropDownIsOpen')).toBeTruthy();
  });

  describe("dropdown", () => {
    it("renders the dropdown", () => {
      const sut = shallow(<Header />);
      expect(sut.find('UncontrolledDropdown').exists()).toBeTruthy();
    });

    it("renders an option with a popover which toggles a non-closable modal", () => {
      const sut = shallow(<Header />);
      expect(sut.find('#alert--do-not-click').exists()).toBeTruthy();
      expect(sut.state('modalIsOpen')).toBeFalsy();
      sut.find('#alert--do-not-click').simulate('click');
      expect(sut.state('modalIsOpen')).toBeTruthy();
      expect(sut.find('Modal').prop('keyboard')).toBeFalsy(); //  keyboard false removes option to use escape key
      expect(sut.find('Modal').prop('backdrop')).toBe('static'); //  backdrop static removes option to click outside the modal
    });

    it("renders a tooltip for the non-closable modal option which appears on hover and connot be open when the modal is open", () => {
      const sut = shallow(<Header />);
      expect(sut.find('Tooltip').exists()).toBeTruthy();
      expect(sut.find('Tooltip').prop('target')).toBe('alert--do-not-click');

      expect(sut.state('toolTipIsOpen')).toBeFalsy();
      expect(sut.find('Tooltip').prop('toggle')).toBe(sut.instance().toolTipToggle);
      sut.instance().toolTipToggle();
      expect(sut.state('toolTipIsOpen')).toBeTruthy();

      sut.instance().toolTipToggle();
      expect(sut.state('toolTipIsOpen')).toBeFalsy();
      sut.find('#alert--do-not-click').simulate('click');
      sut.instance().toolTipToggle();
      expect(sut.state('toolTipIsOpen')).toBeFalsy();
    });
    
    it("Has an infinite loading bar, which doesn't increment unless modal is open", () => {
      jest.useFakeTimers();
      const sut = shallow(<Header />);
      expect(sut.state('loadingPercent')).toBe(0);
      jest.advanceTimersByTime(3000);
      expect(sut.state('loadingPercent')).toBe(0);

      sut.find('#alert--do-not-click').simulate('click');
      jest.advanceTimersByTime(3000);
      expect(sut.state('loadingPercent')).toBe(30);
    });
  });
});
