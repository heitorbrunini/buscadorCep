import { FiSearch } from 'react-icons/fi'
import './styles.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">
        Buscador Cep
      </h1>
      <div className="container-input">
        <input
          type="text"
          placeholder="digite um cep"
        >
        </input>
        <button className="bt-search">
          <FiSearch size={25} color='white' />
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 52416255</h2>
        <span>Rua visualizar</span>
        <span>complemento</span>
        <span>bairro visualizar</span>
        <span>Campina Grande - PB</span>
      </main>


    </div>
  );
}

export default App;
