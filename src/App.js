import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './styles.css'

import api from "./services/api"

function App() {
  
  const [input, setInput] = useState ('');

  const [cep, setCep] = useState ({});
  
  async function handleSearch(){
    //58416255/json
    if (input ===''){
      alert("preencha algum cep!")
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      console.log(response.data);
      setInput('');

    } catch (error) {
      alert("erro ao buscar o cep!")
      setInput('');
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

      {Object.keys(cep).length >0 && (
        <main className='main'>
        <h2>CEP: {cep.cep}</h2>
        <span>Rua: {cep.logradouro}</span>
        <span>complemento: {cep.complemento}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
      </main>
      )}
      


    </div>
  );
}

export default App;
