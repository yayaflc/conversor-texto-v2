import './App.css';
import EventConverter from './components/EventConverter';
import { useState } from 'react';

function App() {

  const [text, setText] = useState('');
  const [result, setResult] = useState('');


  return (
    <div className="App" data-theme="light" style={{ height: '100vh' }}>
      <h1>Conversor de Texto</h1>

      <div className="container">
        <form>
            <textarea value={text} onChange={(event)=>{
              setText(event.currentTarget.value)
              }} id="text" name="texto" placeholder="Digite sua frase..."></textarea>
            <EventConverter textArea={text} setResult={setResult} />
            <textarea value={result} id="result" disabled />
        </form>
      </div>
    </div>
  );
}

export default App;
