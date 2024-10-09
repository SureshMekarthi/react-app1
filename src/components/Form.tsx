import React, { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register } = useForm();
  console.log(register("name"));

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("age")}
          id="name"
          type="text"
          className="from-control"
        ></input>

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
