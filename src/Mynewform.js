import React from 'react';
import './components/global.css';
import {useForm} from 'react-hook-form';

function Mynewform() {

    const { register, handleSubmit}=useForm();
    const onSubmit = (data) =>
    {
        console.log(data);
    } 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <ol>
      <li>  <input type="text" {...register("empName")} required /></li>
      <li>  <input type="text" {...register("empName")} required /></li>
      <li>  <input type="text" {...register("empName")} required /></li>
      <li>  <input type="text" {...register("empId")} /></li>
      <li>  <input type="text" {...register("empAddress")}/></li>
      <li>  <input type="text" {...register("person.name")}/></li>
      <li>  <input type="text" {...register("person.age")}/></li>
      <li>  <input type="text" {...register("person.address")}/></li>
      <li>  <button type="submit">submit</button></li>

        </ol>



    </form>
  )
}

export default Mynewform