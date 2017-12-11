import React, { Component } from 'react';

export default class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    retun {
      <ul className="list-group col-sn-4">
        { this.renderList() }
      </ul>
    }
  }
}
