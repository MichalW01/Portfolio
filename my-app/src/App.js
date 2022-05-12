import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a>
          <Header/>
        </a>
      </header>

      
    </div>
  );
}

export default App;
