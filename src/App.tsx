import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";
// import "./style/Dashboard.css";
import "./style/NavBar.css";
import "./style/Temple.css";
import "./style/Detail.css";
import intance from "./services";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./page/Home";
import { Icategory, Product } from "./interfaces/Product";
import ProductDetail from "./page/ProductDetail";

import ProductAdd from "./page/admin/ProductAdd";

import ProductEdit from "./page/admin/ProductEdit";
import Temple from "./components/Temple";
import Detail from "./components/Detail";
import Main from "./components/Main";
import Category from "./page/admin/Category";

import Products from "./page/admin/Products";
import HomeCate from "./page/admin/homeCate";
import UpdateCate from "./page/admin/UpdateCate";
import TempleDetail from "./components/TempleDetail";

function App() {
  const [category, setCategory] = useState<Icategory[]>([]);
  useEffect(() => {
    try {
      (async () => {
        const { data } = await intance.get("category");
        setCategory(data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const Removecate = (id: number) => {
    (async () => {
      if (confirm("Are you sure?")) {
        try {
          await intance.delete(`category/${id}`);
          setCategory(category.filter((item) => item.id !== id));
        } catch (error) {
          console.log(error);
        }
      }
    })();
  };
  const AddCate = (data: Icategory) => {
    (async () => {
      try {
        const res = await intance.post("category", data);
        setCategory([...category, res.data]);
        if (confirm("Add succefully, redirect to admin page?")) {
          navigate("/admin/home-Cate");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  const handleEditcate = (data: Icategory) => {
    setCategory(
      category.map((category) => (category.id === data.id ? data : category))
    );
    if (confirm("Edit succefully, redirect to admin page?")) {
      navigate("/admin/home-Cate");
    }
  };
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await intance.get("/products");
      setProducts(data);
    })();
  }, []);
  const onAdd = (data: Product) => {
    (async () => {
      try {
        const res = await intance.post("/products", data);
        setProducts([...products, res.data]);
        if (confirm("Add succefully, redirect to admin page?")) {
          navigate("/admin");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  const handleEdit = (data: Product) => {
    setProducts(
      products.map((product) => (product.id === data.id ? data : product))
    );
    if (confirm("Edit succefully, redirect to admin page?")) {
      navigate("/admin");
    }
  };
  const handleRemove = (id: number) => {
    if (confirm("Are you sure?")) {
      (async () => {
        await intance.delete(`/products/${id}`);
        setProducts(products.filter((item) => item.id !== id));
      })();
    }
  };
  return (
    <>
      <NavBar />

      <main className="container">
        <Routes>
          <Route index element={<Home products={products} />}></Route>
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="Temple" element={<Temple />} />
          <Route path="/src/components/Detail.tsx" element={<Detail />} />
          <Route path="/src/components/Main.tsx" element={<Main />} />
          <Route
            path="/templeDetail/:id"
            element={<TempleDetail categories={category} products={products} />}
          />

          <Route
            path="/admin/product-edit/:id"
            element={<ProductEdit onSubmit={handleEdit} />}
          />

          <Route
            path="/admin"
            element={
              <Products handleRemove={handleRemove} product={products} />
            }
          />
          <Route
            path="/admin/product/add"
            element={<ProductAdd onSubmit={onAdd} />}
          />
          <Route
            path="/admin/home-Cate"
            element={<HomeCate cateRemove={Removecate} category={category} />}
          />
          <Route
            path="/admin/category"
            element={<Category onSubmit={AddCate} />}
          />
          <Route
            path="/admin/update-cate/:id"
            element={<UpdateCate editcate={handleEditcate} />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
