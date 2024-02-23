import logoHome from '../../assets/img-home.jpg';

export default function AboutPage() {
  return (
    <div className="w-screen h-screen flex justify-center">
      <main className="flex flex-col w-screen items-center mt-20 lg:mt-24 lg:w-2/3 h-full lg:flex lg:flex-row lg:items-start ">
        <section className="w-1/2">
          <img src={logoHome} className="lg:p-20 w-full h-full" />
        </section>
        <aside className="lg:w-1/2">
          <div className="p-20 flex flex-col gap-5">
            <h2 className="font-extrabold text-3xl">Quienes somos</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              quam lacus suspendisse faucibus interdum posuere lorem. Adipiscing
              bibendum est ultricies integer quis auctor. Nisl purus in mollis
              nunc sed id. Vel elit scelerisque mauris pellentesque pulvinar
              pellentesque habitant morbi tristique. Non enim praesent elementum
              facilisis leo vel fringilla est ullamcorper. Congue quisque
              egestas diam in arcu cursus euismod quis. Faucibus ornare
              suspendisse sed nisi. Lacus vel facilisis volutpat est velit
              egestas dui. Lectus proin nibh nisl condimentum id venenatis a
              condimentum vitae. Nibh nisl condimentum id venenatis a
              condimentum vitae sapien.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}
