import './App.css';
import RouterApp from './Components/RouterApp';
import CartContext from './Components/CartContext';
import { React } from "react";

function App() {
  return (
    <CartContext>
      <div className="App-container">
        <RouterApp></RouterApp>
      </div >
    </CartContext>
  );
}

export default App;

