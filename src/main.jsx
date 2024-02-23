import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ShopProvider } from './contexts/shopContext.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopProvider>
      <App />
    </ShopProvider>
  </BrowserRouter>
);
