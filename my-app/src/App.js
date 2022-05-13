import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header.js';
import Background from './components/Background/Background.js';
import Nav from './components/Navigation/Nav.js';

function App() {
  return (
    <div className="App">
      <Background>
        <Header/>
        <div class="arrow-right"></div>
      </Background>
      
      <Nav />
    </div>
  );
}

export default App;
