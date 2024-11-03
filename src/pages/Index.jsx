import { Link } from "react-router-dom";

import { IconsSvg } from "../utils/Icon";
import { Images } from "../utils/Img";

function Index() {
  return (
    <>
      <div className="relative w-full h-screen overflow-x-hidden font-Epilogue text-secondary-500 pt-16 h-lvh">
        <section className="flex h-2/4">
          <div className="flex items-center justify-center w-1/2">
            <div>
              <h2 className="font-medium text-3xl md:text-5xl lg:text-6xl my-1">
                Snacks naturales <br />y deliciosos
              </h2>
              <Link to={"/productos"}>
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
        <section className="flex flex-col h-screen items-center md:pt-10">
          <h3 className="font-medium text-3xl">Productos</h3>
        </section>
      </div>
    </>
  );
}

export default Index;
