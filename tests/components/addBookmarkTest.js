import React from 'react';
import { shallow } from 'enzyme';
import { assert, expect } from 'chai';
import AddBookmark from '../../src/components/AddBookmark.jsx';

describe('<AddBookmark /> Component', () => {
  it('should render some inputs', () => {
    const component = shallow(<AddBookmark />);
    expect(component.find('input')).to.have.length(2);
  });

  it('should dispatch ADD_BOOKMARK action on click', () => {

  });
})