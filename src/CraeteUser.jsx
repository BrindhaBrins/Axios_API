import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

const CraeteUser = ({onAddUser}) => {
 const [submitedData, setSubmitedData]  = useState();
    let { control, register, handleSubmit, formState:{errors}} = useForm();

     let onSubmit = (data) =>{
      onAddUser(data); // Pass submitted data to the parent component
        console.log(data)
    }
  return (
    <div>
        <h2> React Hook Form Validation</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Name</label>
        <input {...register("name", {required : "Name is required"})}   />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        <br />
        <label> Email</label>
        <input {...register("email", {required: "Email is required"})} /><br />
        <label>Phone</label>
        <Controller name='phone' control={control} defaultValue="" render={({field}) => (
            <input {...field} />
        )} 
        /><br /><br />
        <button type='submit'>Add</button>


      </form>
    </div>
  )
}

export default CraeteUser
