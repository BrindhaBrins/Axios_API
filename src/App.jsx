import React, { useState, useEffect } from "react";
import { fetchUsers, createUser, updateUser, deleteUser } from "./api";
import UserTable from "./UserTable";
import UserForm from "./UserForm";

const App = () => {
  const [users, setUsers] = useState([]); // State to store users
  const [editingUser, setEditingUser] = useState(null); // Store the user being edited

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  // Add or Update User
  const handleAddOrUpdateUser = async (user) => {
    if (user.id) {
      const updatedUser = await updateUser(user.id, user);
      setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
      setEditingUser(null);
    } else {
      const newUser = await createUser(user);
      setUsers([...users, { ...newUser, id: users.length + 1 }]); // Fake ID since JSONPlaceholder doesn’t create real IDs
    }
  };

  // Delete User
  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  // Edit User
  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  return (
    <div>
      <h1>Table</h1>
      <UserForm onSubmit={handleAddOrUpdateUser} editingUser={editingUser} />
      <UserTable users={users} onDelete={handleDeleteUser} onEdit={handleEditUser} />
    </div>
  );
};

export default App;
