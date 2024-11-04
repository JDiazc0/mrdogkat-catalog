function ProductCard(props) {
  const { showImage, productName, amount, description, extraClass } = props;

  return (
    <>
      <div
        className={`bg-white shadow-lg shadow-secondary-500/75
            min-h-[700px] w-[600px] md:min-h-[500px] md:w-[400px]
            p-4 my-5 rounded-lg
            ${extraClass}`}>
        <div className="relative justify-center items-center">
          <img
            src={showImage}
            alt={productName}
            className="w-full h-auto block"
          />
        </div>
        <div className="flex flex-col h-auto justify-end items-start">
          <div className="flex items-center">
            <h3 className="font-bold pr-4 text-3xl md:text-xl content-center">
              {productName}
            </h3>
            <p className="font-light text-lg md:text-sm text-primary-500">
              {amount}
            </p>
          </div>

          <p className="my-1 text-lg md:text-sm">{description}</p>
          <button
            className="p-1 my-1 bg-primary-500 text-white 
          font-medium rounded active:scale-95">
            Ver más
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
