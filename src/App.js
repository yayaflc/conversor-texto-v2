import './App.css';
import EventConverter from './components/EventConverter';

function App() {

  return (
    <div className="App" data-theme="light" style={{ height: '100vh' }}>
      <h1>Conversor de Texto</h1>

      <div className="container">
        <form>
            <textarea id="text" name="texto" placeholder="Digite sua frase..."></textarea>
            <EventConverter/>
            <textarea id="result" disabled />
        </form>
      </div>
    </div>
  );
}

export default App;
