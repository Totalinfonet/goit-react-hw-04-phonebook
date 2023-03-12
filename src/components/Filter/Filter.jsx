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
