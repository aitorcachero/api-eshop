import { NavLink } from 'react-router-dom';
import logoHome from '../../assets/img-home.jpg';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:items-start lg:flex-row ">
      <div className="w-3/5 min-h-screen flex flex-col justify-center items-center lg:flex-row mt-10 gap-10 lg: mt-36">
        <main className="w-full min-h-screen flex flex-col items-center lg:p-0 lg:w-1/2 lg:flex lg:flex-col lg:items-start gap-10">
          <h1 className="text-4xl font-bold">Bienvenido a TecnoStyle</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam
            lacus suspendisse faucibus interdum posuere lorem. Adipiscing
            bibendum est ultricies integer quis auctor. Nisl purus in mollis
            nunc sed id. Vel elit scelerisque mauris pellentesque pulvinar
            pellentesque habitant morbi tristique. Non enim praesent elementum
            facilisis leo vel fringilla est ullamcorper. Congue quisque egestas
            diam in arcu cursus euismod quis. Faucibus ornare suspendisse sed
            nisi. Lacus vel facilisis volutpat est velit egestas dui. Lectus
            proin nibh nisl condimentum id venenatis a condimentum vitae. Nibh
            nisl condimentum id venenatis a condimentum vitae sapien.
          </h2>
          <NavLink to="/products">
            <button className="w-32 w h-10 border bg-orange-900 opacity-80 rounded hover:bg-orange-700 text-zinc-100">
              Comprar
            </button>
          </NavLink>
        </main>
        <aside className="w-full min-h-screen flex flex-col items-center lg:p-0 lg:w-1/2 lg:flex lg:flex-col lg:items-start gap-10">
          <img src={logoHome} className="invisible lg:visible w-96 h-full" />
        </aside>
      </div>
    </div>
  );
}
