import logo from './ohana_noiso.svg';
import './App.css';
import NuevoComponente from './NuevoComponente';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className="App-button">
          Próximamente!
        </p>
      </header>
    </div>
  );
}

export default App;
