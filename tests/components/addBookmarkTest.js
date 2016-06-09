import React from 'react';
import { shallow } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import AddBookmark from '../../src/components/AddBookmark.jsx';
import {ADD_BOOKMARK} from '../../src/actions/actions';

const mockStore = {
  dispatch: sinon.spy()
}

describe('<AddBookmark /> Component', () => {
  it('should render some inputs', () => {
    const component = shallow(<AddBookmark />);
    expect(component.find('input')).to.have.length(2);
  });

  it('should call the stores dispatch method on click', () => {
    const component = shallow(<AddBookmark store={mockStore} />);

    component.find('button').simulate('click');
    expect(mockStore.dispatch.calledOnce).to.equal(true);
  });

  it('should dispatch ADD_BOOKMARK action on click', () => {
    const component = shallow(<AddBookmark store={mockStore} />);
    const expected = {
      type: ADD_BOOKMARK,
      uri: undefined,
      title: undefined
    }

    component.find('button').simulate('click');
    expect(mockStore.dispatch.args[0][0]).to.deep.equal(expected);
  });
})