import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const UserForm = ({ onSubmit, editingUser }) => {
  const {control, handleSubmit, reset} = useForm();

  useEffect(() => {
    if (editingUser) {
      reset(editingUser); // Update form fields when editing
    }
  }, [editingUser, reset]);

  const handleFormSubmit = (data) => {
    onSubmit(data);
    console.log(data);
    reset({ name: "", email: "", phone: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
       <Controller
  name="name"
  control={control}
  rules={{ required: "Name is required" }}
  render={({ field, fieldState: { error } }) => (
    <>
      <input {...field} placeholder="Name" /><br />
      {error && <span style={{ color: "red" }}>{error.message}</span>}
    </>
  )}
/><br /><br />

      <Controller
  name="email"
  control={control}
  rules={{ 
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Invalid email address",
    },
   }}
  
  render={({ field, fieldState: { error } }) => (
    <>
      <input {...field} placeholder="Email" /><br />
      {error && <span style={{ color: "red" }}>{error.message}</span>}
    </>
  )}
/><br /><br />

<Controller
  name="phone"
  control={control}
  rules={{ 
    required: "Phone is required",
     pattern: {
            value: /^[0-9]{10}$/, // Ensures exactly 10 digits
            message: "Phone number must be exactly 10 digits",
          },
  }}
  render={({ field, fieldState: { error } }) => (
    <>
      <input {...field} placeholder="Phone" /><br />
      {error && <span style={{ color: "red" }}>{error.message}</span>}
    </>
  )}
/><br /><br />
      <button type="submit">{editingUser ? "Update" : "Add"} User</button>
    </form>
  );
};

export default UserForm;
