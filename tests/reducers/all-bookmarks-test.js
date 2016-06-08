import 'babel-polyfill';
import { assert } from 'chai';
import reducer from '../../src/reducers/all-bookmarks';

describe('All Bookmakrs Reducer', () => {
  it('should add to state', () => {
    const expected = {
      id: "test",
      uri: "https://www.google.co.uk",
      title: "Google Bookmark"
    }

    const action = Object.assign({type: "ADD"}, expected);
    const result = reducer([], action);

    assert.deepEqual(result, [expected]);
  })
})