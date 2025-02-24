import React, { useState } from 'react';
import axios from 'axios';

const UpdateForm = ({ user, onClose, onUpdate }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUpdateUser = async () => {
    // try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
        name: name,
        email: email
      });

      console.log("Updated User:", response.data);

      // Call parent update function
      onUpdate(response.data);
    // } catch (error) {
    //   console.error("Error updating user:", error);
    // }
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px", marginTop: "10px" }}>
      <h3>Update User</h3>
      <input
        type="text"
        placeholder="Enter new name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter new email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
         <input
        type="text"
        placeholder="Enter new phone"
        value={phone}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleUpdateUser}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default UpdateForm;
