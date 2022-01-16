import logo from './logo.svg';
import './App.css';
import './containers/Ghibli.css'
import './components/Content.css'
import './components/FilmContent.css'
import './components/PersonContent.css'
import GhibliContainer from './containers/GhibliContainer';

function App() {
  return (
    <div className="App">
      <GhibliContainer/>
    </div>
  );
}

export default App;
