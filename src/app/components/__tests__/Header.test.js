import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header/Header';

describe('Header', () => {
  it('renders correctly', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});