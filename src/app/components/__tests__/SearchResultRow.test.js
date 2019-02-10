import React from 'react';
import { shallow } from 'enzyme';
import SearchResultRow from '../SearchResultRow/SearchResultRow';

describe('SearchResultRow', () => {
  it('renders correctly', () => {
    const component = shallow(<SearchResultRow />);
    expect(component).toMatchSnapshot();
  });
});