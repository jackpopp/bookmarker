import 'babel-polyfill';
import { assert } from 'chai';
import reducer from '../../src/reducers/allBookmarks';

describe('All Bookmarks Reducer', () => {
  it('should return an empty array for default state', () => {
    const result = reducer([], {});

    assert.deepEqual(result, []);
  });

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