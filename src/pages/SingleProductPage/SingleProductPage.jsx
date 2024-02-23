import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import useShop from '../../hooks/useShop';
import getProductById from '../../services/products/getProductById';
import back from '../../assets/left-arrow.svg';

export default function SingleProductPage() {
  const params = useParams().id;
  const [product, setProduct] = useState();
  const [image, setImage] = useState();
  const { loader, setLoader } = useShop();

  const { handleAddCart } = useShop();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoader(true);
        const data = await getProductById(params);
        setProduct(data);
        setImage(data.thumbnail);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    getData();
  }, []);

  const handleClick = (i) => {
    setImage(product.images[i]);
  };

  return (
    <>
      {loader && <Loader />}
      {product && !loader && (
        <div className="w-screen  flex flex-col items-center justify-center ">
          <div className="w-2/3 mt-10 flex justify-center items-center lg:justify-start lg:mt-32 ">
            <NavLink to="/products">
              <img
                src={back}
                className="w-48 h-14 opacity-60 rounded hover:scale-125 transition"
              />
            </NavLink>
          </div>
          <section className=" lg:w-2/3 h-full  lg:flex lg:flex-row mt-10">
            <div className="w-full flex justify-center items-center lg:w-1/2 lg:h-2/3 lg:flex lg:flex-col">
              <img
                className="lg:h-96 rounded object-cover mb-10 lg:mb-0"
                src={image}
              ></img>
              <div className="hidden lg:h-1/6 lg:flex lg:flex-row  justify-between">
                {product.images.map((image, i) => {
                  return (
                    <div
                      key={i}
                      className={`w-1/${
                        product.images.length + 1
                      } cursor-pointer overflow-hidden flex justify-center items-center`}
                    >
                      <img
                        src={image}
                        className="w-full h-5/6 object-contain rounded"
                        onClick={() => handleClick(i)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <aside className="w-full  justify-center items-center lg:justify-start lg:items-start lg:w-1/2 flex flex-col gap-8  lg:ml-24">
              <h1 className="font-extrabold text-3xl">{product.title}</h1>
              <section className="w-full flex flex-row justify-center items-center lg:justify-start gap-6">
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={product.rating}
                    // value={3.75}
                    precision={0.01}
                    readOnly
                  />
                </Stack>
                <p>
                  Calificación:{' '}
                  <span className="text-cyan-600 font-bold">
                    {' '}
                    {product.rating}/5
                  </span>
                </p>
              </section>
              <h2 className="text-amber-800 font-extrabold text-xl">
                ${product.price}
              </h2>

              <h2 className="text-center lg:text-left">
                {product.description}
              </h2>
              <h2 className="text-xl">
                Fabricante:{' '}
                <span className="text-slate-500 font-bold">
                  {product.brand.toUpperCase()}
                </span>
              </h2>
              <button
                className="w-48 w h-14 border bg-orange-900 opacity-80 rounded hover:bg-orange-700 text-zinc-100"
                onClick={() => handleAddCart(product)}
              >
                Añadir al carro
              </button>
            </aside>
          </section>
        </div>
      )}
    </>
  );
}
