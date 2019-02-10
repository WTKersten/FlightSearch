import React from 'react';
import { shallow } from 'enzyme';
import SearchResultList from '../SearchResultList/SearchResultList';

describe('SearchResultList', () => {
  it('renders correctly', () => {
    const props = [{
      id: 1,
      from: 'Amsterdam (AMS)',
      to: 'London (STD)',
      price: '€ 30,00'
    }];
    const component = shallow(<SearchResultList flights={props} />);
    expect(component).toMatchSnapshot();
  });
});