import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { Filters } from "../data/Filters";
import products from "../data/Products.json";

import ProductCard from "../components/ProductCard";

function Products() {
  const { type } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    const filtered =
      type !== "todo" ? products.filter((p) => p.type === type) : products;
    setFilteredProducts(filtered);
  }, [type]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <div
        className={`bg-secondary-500 bg-opacity-50 h-screen w-screen z-10 ${
          isFilterOpen ? "absolute" : "hidden"
        }`}></div>
      <div className="relative w-full h-screen overflow-x-hidden font-Epilogue text-secondary-500 pt-24 h-lvh">
        <div className="flex justify-center items-center hidden lg:flex">
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
        <div className="flex justify-start lg:hidden">
          <button
            className="text-2xl px-5 font-medium"
            onClick={() => handleFilter()}>
            Filtros
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {filteredProducts.map((index) => (
            <ProductCard key={index.id} product={index} />
          ))}
        </div>
      </div>
      <div
        ref={filterRef}
        className={`lg:hidden absolute h-lvh top-0  w-3/4 pt-20 z-20
          text-3xl bg-white transition-all duration-500 content-center justify-items-end
          ease-in-out transform overflow-hidden ${
            isFilterOpen ? "left-0" : "-left-3/4"
          }`}>
        {Filters.map((index) => (
          <div
            key={index.name}
            className={`mx-2 rounded-full my-10  ${
              type === index.name.toLowerCase()
                ? "bg-primary-500 text-white"
                : "bg-white text-secondary-500"
            }`}>
            <Link
              to={index.to}
              className={`mx-5 group font-medium`}
              onClick={() => handleFilter()}>
              {index.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
