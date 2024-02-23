// Importamos los hooks.
import { useContext } from 'react';

// Importamos el contexto.
import { ShopContext } from '../contexts/shopContext.jsx';

const useShop = () => {
  return useContext(ShopContext);
};

export default useShop;
