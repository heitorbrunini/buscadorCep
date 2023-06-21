import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './styles.css'

import api from "./services/api"

function App() {
  
  const [input, setInput] = useState ('');
  
  async function handleSearch(){
    //58416255/json
    if (input ===''){
      alert("preencha algum cep!")
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      console.log(response.data)
    } catch (error) {
      alert("erro ao buscar o cep!")
    }
    
  }

  return (
    <div className="container">
      <h1 className="title">
        Buscador Cep
      </h1>
      <div className="container-input">
        <input
          type="text"
          placeholder="digite um cep"
          value={input}
          onChange={ (e) => setInput(e.target.value) }
          required="true"         
        >
        </input>
        <button className="bt-search" onClick={handleSearch} type='submit'>
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
