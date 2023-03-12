import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => (
  <label>
    Find contacts by name
    <input
      type="text"
      name="filter"
      placeholder="Search contacts by name"
      value={filter}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
