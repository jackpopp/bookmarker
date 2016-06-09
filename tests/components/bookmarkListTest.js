import React from 'react';
import { shallow } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';
import { createStore } from 'redux';

import AddBookmark from '../../src/components/AddBookmark.jsx';
import reducer from '../../src/reducers/';

const store = createStore(reducer);

describe('<BookmarkList />', () => {

  it('renders an empty list', () => {

  });

});