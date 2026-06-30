import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

function TableHeader({
  label,
  sortField,
  currentSort,
  sortOrder,
  onSort,
}) {
  const getIcon = () => {
    if (currentSort !== sortField) {
      return <FaSort />;
    }

    return sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />;
  };

  return (
    <th
      className="sortable-header"
      onClick={() => onSort(sortField)}
    >
      <span>{label}</span>
      <span className="sort-icon">
        {getIcon()}
      </span>
    </th>
  );
}

export default TableHeader;