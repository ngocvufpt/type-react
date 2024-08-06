import React from "react";
import { Link } from "react-router-dom";
import { Icategory } from "../../interfaces/Product";

type Props = {
  category: Icategory[];
  cateRemove: (id: number) => void;
};

const HomeCate = ({ category, cateRemove }: Props) => {
  return (
    <>
      <h1 className="fs-1">Hello, Admin</h1>

      <hr />

      <br />
      <Link to="/admin/category" className="btn btn-success">
        Add category
      </Link>
      <table className="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {category.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>

              <td>{item.name}</td>

              <td>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => cateRemove(item.id)}
                >
                  Delete
                </button>
                <Link
                  to={`/admin/update-cate/${item.id}`}
                  className="btn btn-warning"
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default HomeCate;
