import { Link } from "react-router-dom";

function ProductCard(props) {
  const { product, extraClass } = props;

  return (
    <>
      <div
        className={`bg-white shadow-lg shadow-secondary-500/75
            min-h-[500px] w-[400px] md:min-h-[400px] md:w-[300px]
            p-4 my-5 rounded-lg
            ${extraClass}`}>
        <div className="relative justify-center items-center">
          <img
            src={product.showImage}
            alt={product.productName}
            className="w-full h-auto block"
          />
        </div>
        <div className="flex flex-col h-auto justify-end items-start">
          <h3 className="font-bold pr-4 text-3xl md:text-xl content-center">
            {product.productName}
          </h3>
          <p className="my-1 text-lg md:text-sm">{product.description}</p>
          <Link
            to={`/productos/${product.type}/${
              product.id
            }/${product.productName.replace(/ /g, "-")}`}>
            <button
              className="p-1 my-1 bg-primary-500 text-white 
          font-medium rounded active:scale-95">
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
