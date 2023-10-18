import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Conversor de Texto</h1>

      <div className="container">
        <form>
            <textarea name="texto" placeholder="Digite sua frase..."></textarea>
            <div className="buttons">
                <button type="button">maiúscula</button>
                <button type="button">minúscula</button>
                <button type="button">especial</button>
            </div>
            <textarea disabled></textarea>
        </form>
      </div>
    </div>
  );
}

export default App;
