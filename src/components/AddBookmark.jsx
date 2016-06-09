import React from 'react';
import { addBookmark } from '../actions/actions';

export default React.createClass({
  addItem() {
    this.props.store.dispatch(addBookmark({
      uri: undefined,
      title: undefined
    }));
  },
  render() {
    return <div>
      <div>
        <label>Link</label>
        <input placeholder="Link" />
      </div>

      <div>
        <label>Title</label>
        <input placeholder="Title" />
      </div>

      <button onClick={this.addItem} />
    </div>
  }
})
