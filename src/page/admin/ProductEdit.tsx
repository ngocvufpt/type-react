import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Product } from "../../interfaces/Product";
import intance from "../../services";
import { useParams } from "react-router-dom";

type Props = {
  onSubmit: (product: Product) => void;
};

const ProductEdit = ({ onSubmit }: Props) => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  useEffect(() => {
    (async () => {
      const { data } = await intance.get(`products/${id}`);
      setProduct(data);
    })();
  }, []);
  const onEdit = (product: Product) => {
    onSubmit({ ...product, id: Number(id) });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onEdit)}>
        <h1>Edit Product</h1>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            {...register("title", { required: true })}
            defaultValue={product?.title}
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
            defaultValue={product?.price}
          />
          {errors.price && <p className="text-danger">gia khong duoc am</p>}
        </div>
        <div className="form-group">
          <label htmlFor="">Image</label>
          <input
            type="text"
            className="form-control"
            {...register("image", { required: true })}
            defaultValue={product?.image}
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
            defaultValue={product?.description}
          />
          {errors.description && (
            <p className="text-danger">Ten khong duoc de trong</p>
          )}
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ProductEdit;
