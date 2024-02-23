import { useEffect } from 'react';
import ProductCart from '../../components/ProductCart/ProductCart';
import useShop from '../../hooks/useShop';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { cart, deleteAllCart } = useShop();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full items-center lg:justify-center lg:items-start lg:flex-row ">
      <div
        className={`w-full lg:${
          cart.length > 0 ? 'w-4/6' : 'w-6/6'
        } h-h-full flex justify-center items-center`}
      >
        <main className="w-full h-full flex justify-center items-center lg:mt-28  ">
          {cart.length < 1 ? (
            <section className="flex flex-col h-screen  w-screen items-center gap-10 mt-14">
              <h1 className="text-3xl lg:text-6xl ">El carrito está vacio</h1>
              <NavLink to="/products">
                <button className="w-48 w h-14 border bg-orange-900 opacity-80 rounded hover:bg-orange-700 text-zinc-100">
                  Ir a comprar
                </button>
              </NavLink>
            </section>
          ) : (
            <>
              <div className="h-full w-full flex flex-col items-center lg:items-end gap-8 mt-10">
                {cart.map((x, i) => {
                  return <ProductCart producto={x} key={i} />;
                })}
                <div className="h-20 w-full flex flex-row items-center justify-center lg:justify-end gap-8 mt-0 mb-10">
                  <button
                    className="w-44 w h-12 border bg-orange-900 opacity-80 rounded hover:bg-orange-700 text-zinc-100 text-sm"
                    onClick={() => {
                      navigate('/products');
                    }}
                  >
                    Seguir comprando
                  </button>
                  <button
                    className="w-36 w h-12 border bg-orange-900 opacity-80 rounded hover:bg-orange-700 text-zinc-100 text-sm"
                    onClick={() => {
                      deleteAllCart();
                    }}
                  >
                    Eliminar carrito
                  </button>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
      {cart.length > 0 && (
        <div className="flex justify-center w-full px-10 lg:px-0 lg:w-2/6 lg:h-80 lg:flex lg:justify-center  mt-10 lg:mt-36  ">
          <section className="w-full lg:w-4/5 rounded  h-auto flex flex-col justify-between gap-4 p-10 bg-orange-50 border  shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <h2 className="text-slate-400 font-bold text-xl">Resumen</h2>
            <div className="flex flex-row items-center justify-between">
              <h2>Subtotal artículos:</h2>
              <p className="font-extrabold text-2xl text-slate-700">
                {cart.map((x) => x.cantidad).reduce((a, v) => a + v, 0)}
              </p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h2>Total (Impuestos incluidos):</h2>
              <p className="font-extrabold text-xl text-slate-700">
                $
                {cart
                  .map((x) => x.product.price * x.cantidad)
                  .reduce((a, v) => a + v, 0)}
              </p>
            </div>

            <button
              className="w-full h-12 border bg-orange-900 opacity-80 rounded hover:bg-orange-700 text-zinc-100"
              onClick={handleClick}
            >
              Realizar pedido
            </button>
          </section>
        </div>
      )}
    </div>
  );
}
