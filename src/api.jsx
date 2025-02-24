// api.js
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users"; // Dummy API

// Get all users
export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

// Create a new user
export const createUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

// Update user
export const updateUser = async (id, updatedUser) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedUser);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

// Delete user
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id; // Return ID for deletion confirmation
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
