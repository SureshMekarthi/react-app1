import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";
const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z.number().min(0.01).max(100_000),
  category: z.enum(categories),
});

type ExpenseFormData = z.infer<typeof schema>;
function ExpenseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        ></input>
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount")}
          id="amount"
          type="text"
          className="form-control"
        ></input>
        {errors.amount && (
          <p className="text-danger">{errors.description?.message}</p>
        )}
        <label htmlFor="category" className="form-select">
          Category
        </label>
        <select
          {...register("category")}
          id="category"
          className="form-control"
        >
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
          {errors.category && (
            <p className="text-danger">{errors.category?.message}</p>
          )}
        </select>
      </div>
      <button className="btn btn-primary"> submit</button>
    </form>
  );
}

export default ExpenseForm;