import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <article className="h-56 w-80 lg:h-60 flex flex-col rounded ">
      <main className="h-4/5">
        <img
          src={product.thumbnail}
          className="w-full h-full rounded object-cover cursor-pointer bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
          onClick={handleClick}
        />
      </main>
      <footer className="h-1/5 flex flex-row justify-between items-center text-ellipsis">
        <h4>{product.title}</h4>
        <h4 className="font-bold text-amber-900 opacity-85 ">
          ${product.price}
        </h4>
      </footer>
    </article>
  );
}
