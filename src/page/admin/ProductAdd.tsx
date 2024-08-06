import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Product } from "../../interfaces/Product";
import intance from "../../services";

type Props = {
  onSubmit: (product: Product) => void;
};
type Icategory = {
  id: number | string;
  name: string;
};

const AddProduct = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();
  const [category, setCategory] = useState<Icategory[]>([]);
  useEffect(() => {
    try {
      (async () => {
        const { data } = await intance.get("category");
        setCategory(data);
      })();
    } catch (error) {
      console.log(errors);
    }
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Add Product</h1>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            {...register("title", { required: true, minLength: 6 })}
          />
          {errors.title && (
            <p className="text-danger">
              Ten khong duoc de trong va lon hon 6 ky tu
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="">Price</label>
          <input
            type="number"
            className="form-control"
            {...register("price", { required: true, min: 0 })}
          />
          {errors.price && <p className="text-danger">gia khong duoc am</p>}
        </div>
        <div className="form-group">
          <label htmlFor="">Image</label>
          <input
            type="text"
            className="form-control"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <p className="text-danger">Image khong duoc de trong</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="">Decription</label>
          <input
            type="text"
            className="form-control"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <p className="text-danger">Ten khong duoc de trong</p>
          )}
        </div>
        <select {...register("category")}>
          {category.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
