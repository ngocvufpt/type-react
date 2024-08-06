import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Icategory } from "../../interfaces/Product";
import intance from "../../services";

type Props = {
  onSubmit: (category: Icategory) => void;
};

const Category = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Icategory>();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Add danh muc</h1>
        <div className="form-group">
          <label htmlFor="title">Tên danh mục</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-danger">
              Ten khong duoc de trong va lon hon 6 ky tu
            </p>
          )}
          <label htmlFor="image">Image</label>
          <input
            type="text"
            className="form-control"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <p className="text-danger">
              Ten khong duoc de trong va lon hon 6 ky tu
            </p>
          )}
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Category;
