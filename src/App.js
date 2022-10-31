import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import HeaderSite from './components/HeaderSite/HeaderSite';
import Servico from './components/Servico/Servico';

function App() {

  const [servicos, setServicos] = useState([]);
  
  const newServiceSaved = (service) =>{
    setServicos([...servicos, service]);
    console.log(servicos);
  }

  return (
    <div className="App">
        <HeaderSite />
        <Banner />
        <h1>Peça seu serviço</h1>
        <Formulario 
        title = "Digite seus dados:"
        onServiceSaved = {servico => newServiceSaved(servico)} />
        <Servico nome = "Desenvolvimento"/>
        <Servico nome = "Manutenção PC"/>
        <Servico nome = "Manutenção Android"/>
    </div>
  );
}

export default App;
