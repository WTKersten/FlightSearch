import React from 'react';
import { mount } from 'enzyme';
import SearchResultRow from '../SearchResultList/SearchResultRow/SearchResultRow';

describe('SearchResultRow', () => {
  it('renders correctly', () => {
    const props = {
      id: 1,
      from: 'Amsterdam (AMS)',
      to: 'London (STD)',
      price: '€ 30,00'
    };
    const component = mount(<SearchResultRow {...props} />);
    expect(component).toMatchSnapshot();
  });
});