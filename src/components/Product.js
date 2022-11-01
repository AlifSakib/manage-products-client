import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, handleDeletProduct }) => {
  const { name, picture, price, quantity } = product;
  return (
    <div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto ">
            <div className="flex flex-wrap -m-4 bg-slate-100 rounded-lg">
              <div className=" p-4 w-full">
                <Link
                  to={`/product/${product._id}`}
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={picture}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    Smart Phone
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {name}
                  </h2>
                  <p className="mt-1">${price}</p>
                </div>
                <div className="space-y-4 mt-2 lg:space-x-4">
                  <button
                    onClick={() => handleDeletProduct(product)}
                    className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded "
                  >
                    Delete
                  </button>
                  <button className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded ">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
