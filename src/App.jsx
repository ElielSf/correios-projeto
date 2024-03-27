import { useState } from 'react'
import './css/App.css'

export default function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  const buscaCep = async () => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    setEndereco(data);
  }

  return (
    <div className='content'>
      <div className='header'>
        <h1 className='title'>Consultar CEP</h1>
      </div>
      <div className='cep'>
        <input className='input' type="text" value={cep} onChange={(e) => setCep(e.target.value)} placeholder='Digite o CEP'/><br/>
        <button className='button' onClick={buscaCep}>Buscar</button>
      </div>
      <div className='result'>
        {endereco && (
          <div>
            <h2 className='subtitle'>Endereço encontrado:</h2>
            <p className='items'>CEP: {endereco.cep}</p>
            <p className='items'>Estado: {endereco.uf}</p>
            <p className='items'>Logradouro: {endereco.logradouro}</p>
            <p className='items'>Bairro: {endereco.bairro}</p>
            <p className='items'>Localidade: {endereco.localidade}</p>
            <p className='items'>DDD: {endereco.ddd}</p>
            <p className='items'>IBGE: {endereco.ibge}</p>
            <p className='items'>Complemento: {endereco.complemento}</p>
          </div>
        )}
      </div>
    </div>
  )
}
