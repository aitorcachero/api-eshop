import useShop from '../../hooks/useShop';

export default function ProductCart({ producto }) {
  const { sumItemCart, substractItemCart, deleteItemCart } = useShop();
  const { product, cantidad } = producto;

  return (
    <div className="flex flex-col justify-center items-center w-5/6  py-10 lg:w-5/6 lg:h-32 lg:flex lg:flex-row lg:justify-center lg:items-center border rounded bg-orange-50 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]  ">
      <img
        src={product.thumbnail}
        className="w-2/3 h-64 lg:w-24 lg:h-24 rounded bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
      />

      <div className="flex flex-col justify-center items-center gap-3 m-3 w-2/3 lg:w-5/12 text-ellipsis">
        <h2 className="font-semibold text-xl ">{product.title}</h2>
        <h2 className="text-amber-800 font-extrabold text-xl">
          ${product.price}
        </h2>
      </div>
      <div className="flex flex-row justify-center items-center gap-4">
        <button
          className="border rounded w-8 h-8 flex justify-center items-center  bg-orange-900 opacity- hover:bg-orange-700 text-zinc-100"
          onClick={() => {
            substractItemCart(product.id);
          }}
        >
          -
        </button>
        <p>{cantidad}</p>
        <button
          className="border rounded w-8 h-8 flex justify-center items-center  bg-orange-900 opacity-80 hover:bg-orange-700 text-zinc-100"
          onClick={() => {
            sumItemCart(product.id);
          }}
        >
          +
        </button>
      </div>
      <div className="flex justify-center items-center w-32 m-10 text-xl">
        <p className="mr-2">Precio:{'  '}</p>

        <span className="text-xl font-semibold text-slate-600">
          ${product.price * cantidad}
        </span>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="w-28 w h-12 border bg-orange-900 opacity-80 rounded hover:bg-orange-700 text-zinc-100"
          onClick={() => {
            deleteItemCart(product.id);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
