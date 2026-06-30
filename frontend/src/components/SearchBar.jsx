import { FaSearch } from "react-icons/fa";

function SearchBar({
  search,
  setSearch,
  sortBy,
  setSortBy
}) {
  return (
    <div className="search-container">

      <div className="search-input">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <select
        className="sort-select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >

        <option value="latest">Latest</option>

        <option value="nameAsc">
          Name (A-Z)
        </option>

        <option value="nameDesc">
          Name (Z-A)
        </option>

        <option value="ageAsc">
          Age (Low-High)
        </option>

        <option value="ageDesc">
          Age (High-Low)
        </option>

      </select>

    </div>
  );
}

export default SearchBar;