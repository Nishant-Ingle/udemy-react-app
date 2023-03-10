import './App.css';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import {Routes, Route} from 'react-router-dom';
import Checkout from './components/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
