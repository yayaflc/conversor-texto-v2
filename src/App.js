import './App.css';
import EventConverter from './components/EventConverter';
import {useRef} from 'react';

function App() {
  const ref = useRef(null);

  return (
    <div className="App" data-theme="light">
      <h1>Conversor de Texto</h1>

      <div className="container">
        <form>
            <textarea ref={ref} id="text" name="texto" placeholder="Digite sua frase..."></textarea>
            <EventConverter />
            <textarea ref={ref} id="result" disabled></textarea>
        </form>
      </div>
    </div>
  );
}

export default App;
