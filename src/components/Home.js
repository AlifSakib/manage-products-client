import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Home = () => {
  const products = useLoaderData();
  const [user, setUser] = useState({});
  const handleAddProduct = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleInputBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newuser = { ...user };
    newuser[field] = value;
    setUser(newuser);
  };
  return (
    <div>
      {/* Products Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap ">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Brand New Products
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </div>
          {/* Add Product Section  */}
          <form
            onSubmit={handleAddProduct}
            className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
          >
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Manage Products
            </h2>
            <div className="relative mb-4 text-start">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-gray-600 "
              >
                Product Name
              </label>
              <input
                onBlur={handleInputBlur}
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 text-start">
              <label
                htmlFor="price"
                className="leading-7 text-sm text-gray-600 "
              >
                Price
              </label>
              <input
                onBlur={handleInputBlur}
                type="text"
                id="price"
                name="price"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 text-start">
              <label
                htmlFor="picture"
                className="leading-7 text-sm text-gray-600 "
              >
                Picture
              </label>
              <input
                onBlur={handleInputBlur}
                type="text"
                id="picture"
                name="picture"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 text-start">
              <label
                htmlFor="quantity"
                className="leading-7 text-sm text-gray-600 "
              >
                Quantity
              </label>
              <input
                onBlur={handleInputBlur}
                type="text"
                id="quantity"
                name="quantity"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Add Product
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Manage your product in a very organized way.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
