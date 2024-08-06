import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../interfaces/Product";

type Props = {
  product: Product[];
  handleRemove: (id: number) => void;
};

const Products = ({ product, handleRemove }: Props) => {
  return (
    <>
      <h1 className="fs-1">Hello, Admin</h1>

      <hr />
      <Link to="/admin/product/add" className="btn btn-success my-3">
        Add new product
      </Link>
      <br />
      <Link to="/admin/category" className="btn btn-success">
        Add category
      </Link>
      <table className="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Description</th>
            <th>category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(Number(item.id))}
                >
                  Delete
                </button>
                <Link
                  to={`/admin/product-edit/${item.id}`}
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

export default Products;
