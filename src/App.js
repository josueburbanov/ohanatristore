import './App.css';
import NuevoComponente from './Components/Clase/NuevoComponente';
import ComponentesII from './Components/Clase/ComponentesII';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

import React, { useState } from "react";

function App() {
  const [itemsBag, setItemsBag] = useState(0);
  return (
    <div className="App-container">
      <NavBar itemsBagNav={itemsBag}></NavBar>
      <header className="App-header"></header>
      <body className="App-body">
        <ItemListContainer grettingUp="Tienda en" grettingDown="construcción" itemsBagList={itemsBag} setItemsBagList={setItemsBag}></ItemListContainer>
      </body>
    </div>
  );
}

export default App;
