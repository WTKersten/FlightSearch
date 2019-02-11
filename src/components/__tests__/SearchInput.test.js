import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from '../SearchInput/SearchInput';

describe('SearchInput', () => {
  it('renders correctly', () => {
    const component = shallow(<SearchInput />);
    expect(component).toMatchSnapshot();
  });
});