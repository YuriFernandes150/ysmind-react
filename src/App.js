import { useState } from 'react';
import Banner from './components/Banner/Banner';
import FooterSite from './components/FooterSite/FooterSite';
import Formulario from './components/Formulario/Formulario';
import HeaderSite from './components/HeaderSite/HeaderSite';
import Servico from './components/Servico/Servico';

function App() {

  const listaServico = [

    {
      nome: "Desenvolvimento",
      corPrimaria: "#f2480d",
      corSecundaria: "#ffc4b0"
    },
    {
      nome: "Manutenção PC",
      corPrimaria: "#1135ba",
      corSecundaria: "#a1afe3"
    },
    {
      nome: "Manuntenção Android",
      corPrimaria: "#158c00",
      corSecundaria: "#b5edab"
    }

  ];

  const [servicos, setServicos] = useState([]);

  const newServiceSaved = (service) => {
    setServicos([...servicos, service]);
    console.log(servicos);
  }

  return (
    <div className="App">
      <HeaderSite />
      <Banner />
      <h1>Peça seu serviço</h1>
      <Formulario
        title="Digite seus dados:"
        onServiceSaved={servico => newServiceSaved(servico)}
        itens={listaServico.map(servico => servico.nome)} />
      {listaServico.map(service =>
        <Servico key={service.nome}
          nome={service.nome}
          corPrimaria={service.corPrimaria}
          corSecundaria={service.corSecundaria}
          servicos={servicos.filter(servico => servico.servico == service.nome)} />)}
      <FooterSite />
    </div>
  );
}

export default App;
