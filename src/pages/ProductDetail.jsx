import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [recommendedProduct, setRecommendeProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const notFound = "Producto no encontrado.";

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/Products.json`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al cargar los productos:", error));
  }, []);

  function getRandomProduct() {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
  }

  useEffect(() => {
    let randomProduct;

    do {
      randomProduct = getRandomProduct();
    } while (randomProduct.id === id);

    setRecommendeProduct(randomProduct);
  }, [id]);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  return (
    <>
      <div className="relative w-full h-screen overflow-x-hidden font-Epilogue text-secondary-500 pt-16 h-lvh">
        <section className="flex flex-col lg:flex-row">
          <div className="w-full h-min lg:w-1/2 h-lvh flex flex-col">
            <img
              src={product ? product.showImage : ""}
              alt=""
              className="object-cover"
            />
          </div>
          <div className="w-full h-min lg:w-1/2 h-lvh p-10">
            <h4 className="font-bold text-4xl text-center">
              {product ? product.productName : notFound}
            </h4>
            <p className="font-medium my-5">Presentaciones:</p>
            <table className="w-full lg:w-3/4 divide-y divide-gray-200 dark:divide-neutral-700">
              <thead>
                <tr>
                  <th className="border border-slate-100">Cantidad</th>
                  <th className="border border-slate-100">Precio</th>
                </tr>
              </thead>
              <tbody>
                {product ? (
                  product.presentations.map((index) => (
                    <tr
                      key={index.amount}
                      className="odd:bg-white even:bg-secondary-50 even:bg-opacity-50">
                      <td className="border border-slate-100 px-5">
                        {index.amount}
                      </td>
                      <td className="border border-slate-100 px-5">
                        $ {index.price}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>{notFound}</td>
                  </tr>
                )}
              </tbody>
            </table>

            <p className="font-light py-5 text-justify">
              {product ? product.description : notFound}
            </p>
            <section className="w-full h-min h-lvh flex flex-col">
              <h4 className="font-medium text-2xl mb-5">Podria interesarte:</h4>
              {recommendedProduct ? (
                <Link
                  to={`/productos/${recommendedProduct.type}/${
                    recommendedProduct.id
                  }/${recommendedProduct.productName.replace(/ /g, "-")}`}>
                  <div
                    className="w-full h-min flex bg-primary-50 bg-opacity-30 h-56 
              items-center overflow-hidden rounded select-none">
                    <img
                      src={recommendedProduct.showImage}
                      alt=""
                      className="w-1/2 object-cover hover:scale-105"
                    />
                    <p className="font-medium text-2xl ">
                      {recommendedProduct.productName}
                    </p>
                  </div>
                </Link>
              ) : (
                notFound
              )}
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductDetail;
