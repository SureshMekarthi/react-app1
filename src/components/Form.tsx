import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="from-control"
        ></input>
        {errors.name?.type === "required" && (
          <p className="text-danger">the name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p>the name must be in min lenth</p>
        )}
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="from-control"
        ></input>
      </div>
      <button className="btn btn-primary" type="submit">
        submit
      </button>
    </form>
  );
};

export default Form;
