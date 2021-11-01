import './App.css';
import RouterApp from './Components/RouterApp';
import CartContext from './Components/CartContext';
import { React } from "react";
import Footer from './Components/Footer';

function App() {
  return (
    <CartContext>
      <div className="App-container">
        <RouterApp></RouterApp>
        <Footer></Footer>
      </div >
    </CartContext>
  );
}

export default App;

