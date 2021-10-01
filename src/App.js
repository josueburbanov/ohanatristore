import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import React, { useState } from "react";
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';

function App() {
  const [itemsBag, setItemsBag] = useState(0);
  const [clickItem, setclickItem] = useState(false);
  return (
    <div className="App-container ">
      <Router>
        <NavBar itemsBagNav={itemsBag}></NavBar>
        <header className="App-header"></header>
        <body className="App-body mx-32">
          <Switch>
            <Route exact path='/'>
              <ItemListContainer grettingUp="Tienda en" grettingDown="construcción" banner="true" itemsBagList={itemsBag} setItemsBagList={setItemsBag}></ItemListContainer>
            </Route>
          </Switch>

          <Switch>
            <Route path='/item/:id'>
              <ItemDetailContainer></ItemDetailContainer>
            </Route>
            <Route exact path='/category/:categoryId'>
              <ItemListContainer banner={false} itemsBagList={itemsBag} setItemsBagList={setItemsBag}></ItemListContainer>
            </Route>
          </Switch>
        </body>
      </Router>
    </div >
  );
}

export default App;
