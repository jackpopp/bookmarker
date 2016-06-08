import React from 'react';
import AddBookmark from './AddBookmark.jsx';

export default React.createClass({
  render() {
    return <div>
      <h2>List</h2>
      <ul>
        <li>
          <a href="">Link</a>
        </li>
      </ul>
      <AddBookmark />

    </div>
  }
});