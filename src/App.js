import logo from './ohana_noiso.svg';
import './App.css';
import NuevoComponente from './NuevoComponente';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div className="App-container">
      <NavBar></NavBar>
      <header className="App-header"></header>
      <body className="App-body">
        <ItemListContainer grettingUp="Tienda en" grettingDown="construcción"></ItemListContainer>
      </body>
    </div>
  );
}

export default App;
