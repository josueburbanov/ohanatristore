import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import { React, useState } from "react";

const RouterApp = () => {
    const [itemsBag, setItemsBag] = useState(0);
    return (
        <div>
            <Router>
                <NavBar itemsBagNav={itemsBag}></NavBar>
                <Switch className="App-body mx-32">
                    <Route exact path='/'>
                        <ItemListContainer grettingUp="Tienda en" grettingDown="construcción" banner="true" itemsBagList={itemsBag} setItemsBagList={setItemsBag}></ItemListContainer>
                    </Route>
                    <Route path='/item/:id'>
                        <ItemDetailContainer itemsBagList={itemsBag} setItemsBagList={setItemsBag}></ItemDetailContainer>
                    </Route>
                    <Route exact path='/category/:categoryId'>
                        <ItemListContainer banner={false} itemsBagList={itemsBag} setItemsBagList={setItemsBag}></ItemListContainer>
                    </Route>
                    <Route exact path='/cart'>
                        <ItemListContainer grettingUp="Cart" grettingDown="próximamente" banner="true" itemsBagList={itemsBag} setItemsBagList={setItemsBag}></ItemListContainer>
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}

export default RouterApp
