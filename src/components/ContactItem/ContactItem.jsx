import { Component } from 'react';

export class ContactItem extends Component {
  handleDelete = () => {
    const { onDelete } = this.props;
    onDelete();
  };

  render() {
    const { name, number } = this.props;
    return (
      <li>
        {name}: {number}
        <button type="button" onClick={this.handleDelete}>
          Delete
        </button>
      </li>
    );
  }
}
