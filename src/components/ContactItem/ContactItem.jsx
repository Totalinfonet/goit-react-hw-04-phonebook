import { Component } from 'react';
import PropTypes from 'prop-types';
import { Li, DeleteButton } from './ContactItem.styled';

export class ContactItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  handleDelete = () => {
    const { onDelete } = this.props;
    onDelete();
  };

  render() {
    const { name, number } = this.props;
    return (
      <Li>
        {name}: {number}
        <DeleteButton type="button" onClick={this.handleDelete}>
          Delete
        </DeleteButton>
      </Li>
    );
  }
}
