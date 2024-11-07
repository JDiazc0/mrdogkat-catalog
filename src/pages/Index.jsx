import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { IconsSvg } from "../utils/Icon";
import { Images } from "../utils/Img";
import { benefits } from "../data/Benefits";

import ProductCard from "../components/ProductCard";

function Index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/Products.json");
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-x-hidden font-Epilogue text-secondary-500 pt-16 h-lvh">
        <section className="flex h-2/4">
          <div className="flex items-center justify-center w-1/2">
            <div>
              <h2 className="font-medium text-3xl md:text-5xl lg:text-6xl my-1">
                Snacks naturales <br />y deliciosos
              </h2>
              <Link to={"/productos/todo"}>
                <button
                  className="flex items-center p-1 my-1 bg-primary-500 
              text-white font-medium rounded shadow-[0_0_10px_0_rgba(0,0,0,0.75)] shadow-primary-500 active:scale-95">
                  Nuestros Productos
                  <img src={IconsSvg.Arrow} alt="" className="px-1" />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center w-1/2">
            <img
              src={IconsSvg.Gradient}
              alt=""
              className="absolute -z-20 h-96 md:h-2/3 lg:h-auto"
            />
            <img
              src={Images.Galletas}
              alt=""
              className="absolute h-80 -z-10 md:h-1/3 lg:h-2/3"
            />
          </div>
        </section>
        <section className="flex flex-col h-auto items-center md:py-10">
          <h3 className="font-medium text-3xl">Productos</h3>
          <div className="flex overflow-x-auto w-full space-x-4">
            <div className="flex w-max space-x-4">
              {products.map((index) => (
                <ProductCard
                  key={index.id}
                  product={index}
                  extraClass="transition-transform transform hover:scale-105"
                />
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col h-auto items-center py-10">
          <h3 className="font-medium text-3xl py-5 px-2">
            ¿Por qué escogernos?
          </h3>
          <div className="flex flex-col justify-center lg:grid lg:grid-cols-2">
            {benefits.map((index) => (
              <div key={index.text} className="flex my-5">
                <img src={index.icon} alt="" className="h-12 mx-2" />
                <div className="mx-2">
                  <h3 className="font-bold text-2xl">{index.text}</h3>
                  <p>{index.complement}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Index;
