import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const ShopContext = createContext(null);

// Creamos el componente provider del contexto.
export const ShopProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [cart, setCart] = useState([]);
  const [loader, setLoader] = useState(false);
  const [authToken, setAuthToken] = useState(
    localStorage.getItem('tecnoStyleUser')
  );

  let cantidad = 0;

  useEffect(() => {
    const getDataFromLS = localStorage.getItem('tecnoStyleCart');
    setCart(getDataFromLS ? JSON.parse(getDataFromLS) : []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      cantidad = cart.map((x) => x.cantidad).reduce((v, a) => v + a, 0);
    }
  }, [cart]);

  const handleAddCart = (product) => {
    if (cart.find((x) => x.product.id === product.id)) {
      toast.error('El producto ya está en el carrito');
    } else {
      const newCart = [...cart];
      newCart.push({ product: product, cantidad: 1 });
      setCart(newCart);

      localStorage.setItem('tecnoStyleCart', JSON.stringify(newCart));
      toast.success('Producto añadido al carrito');
    }
  };

  const validLogin = (mail, password) => {
    if (mail === 'example@example.com' && password === '12345678') {
      toast.success('Bienvenido de nuevo');
    } else {
      toast.error('Creedenciales invalidas');
    }
  };

  const sumItemCart = (id) => {
    const newCart = [...cart];
    newCart.forEach((x) => {
      if (x.product.id === id) x.cantidad++;
    });
    localStorage.setItem('tecnoStyleCart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const substractItemCart = (id) => {
    const newCart = [...cart];
    newCart.forEach((x) => {
      if (x.product.id === id) {
        if (x.cantidad === 0) {
          return;
        } else {
          x.cantidad--;
        }
      }
    });
    localStorage.setItem('tecnoStyleCart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const deleteItemCart = (id) => {
    console.log(cart);
    const newCart = [...cart.filter((x) => x.product.id !== id)];
    localStorage.setItem('tecnoStyleCart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const deleteAllCart = () => {
    const newCart = [];
    setCart([]);
    localStorage.setItem('tecnoStyleCart', JSON.stringify(newCart));
    setCart(newCart);
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        setCart,
        handleAddCart,
        auth,
        setAuth,
        validLogin,
        cantidad,
        sumItemCart,
        substractItemCart,
        deleteItemCart,
        deleteAllCart,
        loader,
        setLoader,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
