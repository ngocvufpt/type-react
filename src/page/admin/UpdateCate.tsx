import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Icategory } from "../../interfaces/Product";
import intance from "../../services";
import { useParams } from "react-router-dom";

type Props = {
  editcate: (category: Icategory) => void;
};

const UpdateCate = ({ editcate }: Props) => {
  const { id } = useParams();
  const [category, setCategory] = useState<Icategory | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Icategory>();

  useEffect(() => {
    (async () => {
      const { data } = await intance.get(`category/${id}`);
      setCategory(data);
    })();
  }, []);
  const onSubmit = (category: Icategory) => {
    editcate({ ...category, id: Number(id) });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="fs-1   my-3">Edit Cate</h1>
        <div className="form-group my-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: true })}
            defaultValue={category?.name}
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
            defaultValue={category?.image}
          />
          {errors.image && (
            <p className="text-danger">
              Ten khong duoc de trong va lon hon 6 ky tu
            </p>
          )}
        </div>

        <button className="btn btn-primary my-4">Submit</button>
      </form>
    </div>
  );
};

export default UpdateCate;
