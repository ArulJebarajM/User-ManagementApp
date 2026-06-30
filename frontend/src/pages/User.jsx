import { useState, useMemo } from "react";

import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";

function Users({
  users,
  loading,
  getUsers,
  setSelectedUser,
}) {

  const [search, setSearch] = useState("");

  const [sortField, setSortField] = useState("name");

  const [sortOrder, setSortOrder] = useState("asc");

  const filteredUsers = useMemo(() => {

    let filtered = users.filter((user) => {

      return (

        user.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        user.email
          .toLowerCase()
          .includes(search.toLowerCase())

      );

    });

    filtered.sort((a, b) => {

      let first = a[sortField];
      let second = b[sortField];

      if (sortField === "age") {

        first = Number(first);
        second = Number(second);

      } else {

        first = first.toLowerCase();
        second = second.toLowerCase();

      }

      if (first < second)
        return sortOrder === "asc" ? -1 : 1;

      if (first > second)
        return sortOrder === "asc" ? 1 : -1;

      return 0;

    });

    return filtered;

  }, [users, search, sortField, sortOrder]);

  function handleSort(field) {

    if (field === sortField) {

      setSortOrder(

        sortOrder === "asc"

          ? "desc"

          : "asc"

      );

    } else {

      setSortField(field);

      setSortOrder("asc");

    }

  }

  return (

    <div className="page">

      <div className="page-header">

        <h1>User Management</h1>

        <p>

          Search, sort, edit and delete users.

        </p>

      </div>

      <SearchBar

        search={search}

        setSearch={setSearch}

      />

      <UserTable

        users={filteredUsers}

        loading={loading}

        getUsers={getUsers}

        setSelectedUser={setSelectedUser}

        sortField={sortField}

        sortOrder={sortOrder}

        handleSort={handleSort}

      />

    </div>

  );

}

export default Users;