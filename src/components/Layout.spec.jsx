import React from "react"
import { shallow } from "enzyme"

import Layout from "./Layout.jsx"

describe("Layout", () => {
  it("renders", () => {
    const sut = shallow(<Layout />);
    expect(sut.find('HelmetWrapper').exists()).toBeTruthy();
  });

  it("has a helmet with a title and meta data", () => {
    const sut = shallow(<Layout />);
    expect(sut.find('HelmetWrapper').prop('title')).toBe('Alex\'s Website');
    expect(sut.find('HelmetWrapper').prop('meta').length).toBe(2); 
  });

  it("renders a main section and a footer with a Callingcard", () => {
    const sut = shallow(<Layout />);
    expect(sut.find('main').exists()).toBeTruthy();
    expect(sut.find('footer').exists()).toBeTruthy();
    expect(sut.find('footer').find('Callingcard').exists()).toBeTruthy();
  });

  it("renders the children in the main section", () => {
    const sut = shallow(<Layout><h1>Child</h1></Layout>);
    expect(sut.find('main').exists()).toBeTruthy();
    expect(sut.find('main').find('h1').exists()).toBeTruthy();
  });

  it("renders without a border if hasNoBorder is true", () => {
    const sut = shallow(<Layout hasNoBorder/>);
    expect(sut.find('.container--main--no-border').exists()).toBeTruthy();
  });

  it("renders with a border if hasNoBorder is false", () => {
    const sut = shallow(<Layout hasNoBorder={false}/>);
    expect(sut.find('.container--main--no-border').exists()).toBeFalsy();
  });
});
