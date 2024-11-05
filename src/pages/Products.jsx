import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Filters } from "../data/Filters";
import products from "../data/Products.json";

import ProductCard from "../components/ProductCard";

function Products() {
  const { type } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered =
      type !== "todo" ? products.filter((p) => p.type === type) : products;
    setFilteredProducts(filtered);
  }, [type]);

  return (
    <>
      <div className="relative w-full h-screen overflow-x-hidden font-Epilogue text-secondary-500 pt-24 h-lvh">
        <div className="flex justify-center items-center">
          {Filters.map((index) => (
            <div
              key={index.name}
              className={`mx-2 rounded-full ${
                type === index.name.toLowerCase()
                  ? "bg-primary-500 text-white"
                  : "bg-white text-secondary-500"
              }`}>
              <Link to={index.to} className={`mx-5 group font-medium`}>
                {index.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {filteredProducts.map((index) => (
            <ProductCard key={index.id} product={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
