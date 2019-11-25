import React from "react"
import { mount } from "enzyme"

import Welcome, { interval, numCubes } from "./Welcome.jsx"

describe("Welcome", () => {
  it("renders", () => {
    const wrapper = mount(<Welcome />);
    expect(wrapper.find('figure').exists()).toBeTruthy();
  });

  it("renders a link to the home page which changes a state var if hovered over", () => {
    const wrapper = mount(<Welcome />);
    expect(wrapper.find('a').exists()).toBeTruthy();
    expect(wrapper.find('a').prop('href')).toBe('/Home/');

    expect(wrapper.state('hover')).toBeFalsy();
    wrapper.find('a').simulate('mouseenter');
    expect(wrapper.state('hover')).toBeTruthy();
    wrapper.find('a').simulate('mouseleave');
    expect(wrapper.state('hover')).toBeFalsy();
  });

  it("doesnt change hover state if already hovering", () => {
    const wrapper = mount(<Welcome />);

    wrapper.find('a').simulate('mouseenter');
    expect(wrapper.state('hover')).toBeTruthy();
    wrapper.find('a').simulate('mouseenter');
    expect(wrapper.state('hover')).toBeTruthy();

    wrapper.find('a').simulate('mouseleave');
    expect(wrapper.state('hover')).toBeFalsy();
    wrapper.find('a').simulate('mouseleave');
    expect(wrapper.state('hover')).toBeFalsy();
  });

  describe("Canvas", () => {
    it("renders a canvas", () => {
        const wrapper = mount(<Welcome />);
        expect(wrapper.find('canvas').exists()).toBeTruthy();
    });


    it("moves the squares in correct direction when not hovering", () => {
        jest.clearAllTimers()
        jest.useFakeTimers();
        const wrapper = mount(<Welcome />);
        expect(wrapper.find('canvas').exists()).toBeTruthy();
        for (let count = 0; count < 1000; count++) {
            const initialX = Object.assign({}, wrapper.state('x'));
            const initialY = Object.assign({}, wrapper.state('y'));

            const isUp = wrapper.state('is_up');
            const isLeft = wrapper.state('is_left');

            jest.advanceTimersByTime(interval);

            const currentX = wrapper.state('x')
            const currentY = wrapper.state('y')

            for (let cube = 0; cube < numCubes; cube++) {
                isUp[cube]?
                expect(initialY[cube]>currentY[cube]).toBeTruthy():
                expect(initialY[cube]<currentY[cube]).toBeTruthy();

                isLeft[cube]?
                expect(initialX[cube]>currentX[cube]).toBeTruthy():
                expect(initialX[cube]<currentX[cube]).toBeTruthy();
            }
        }
    });

    it("moves the squares in correct direction when hovering", () => {
        jest.clearAllTimers()
        jest.useFakeTimers();
        const wrapper = mount(<Welcome />);
        wrapper.find('a').simulate('mouseenter');
        expect(wrapper.find('canvas').exists()).toBeTruthy();
        for (let count = 0; count < 200; count++) {
            const initialX = Object.assign({}, wrapper.state('x'));
            const initialY = Object.assign({}, wrapper.state('y'));

            const isUp = wrapper.state('is_up');
            const isLeft = wrapper.state('is_left');

            jest.advanceTimersByTime(interval);

            const currentX = wrapper.state('x')
            const currentY = wrapper.state('y')

            for (let cube = 0; cube < numCubes; cube++) {
                isUp[cube]?
                expect(initialY[cube]>=currentY[cube]).toBeTruthy():
                expect(initialY[cube]<=currentY[cube]).toBeTruthy();

                isLeft[cube]?
                expect(initialX[cube]>=currentX[cube]).toBeTruthy():
                expect(initialX[cube]<=currentX[cube]).toBeTruthy();
            }
        }
    });
  });
});
