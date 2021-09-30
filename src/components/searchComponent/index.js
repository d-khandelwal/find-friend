import PrimaryInput from "../primaryInput";

function SearchComponent({ value, onChange }) {
  return (
    <>
      <PrimaryInput
        className="search-input"
        type="search"
        placeholder="Search by name..."
        name='search'
        value={value}
        onChange={onChange}
      />
    </>
  )
}
export default SearchComponent;