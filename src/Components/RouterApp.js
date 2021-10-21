import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import { React } from "react";
import Cart from './Cart';

const RouterApp = ({itemsBag, setItemsBag}) => {
    
    return (
        <div>
            <Router>
                <NavBar></NavBar>
                <Switch className="App-body mx-32">
                    <Route exact path='/'>
                        <ItemListContainer grettingUp="Tienda en" grettingDown="construcción" banner="true"></ItemListContainer>
                    </Route>
                    <Route path='/item/:id'>
                        <ItemDetailContainer></ItemDetailContainer>
                    </Route>
                    <Route exact path='/category/:categoryId'>
                        <ItemListContainer banner={false}></ItemListContainer>
                    </Route>
                    <Route exact path='/cart'>
                        <Cart></Cart>
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}

export default RouterApp
