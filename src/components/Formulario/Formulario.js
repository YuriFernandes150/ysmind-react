import './Formulario.css'
import TextField from '../TextField/TextField'
import ComboBox from '../ComboBox/ComboBox';
import Button from '../Button/Button';
import { useState } from 'react';


const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [imagem, setImagem] = useState('');
    const [servico, setServico] = useState('');


    const salvar = (submitEvent) => {
        submitEvent.preventDefault();
        props.onServiceSaved({ nome, sobrenome, imagem, servico });
        setNome('');
        setImagem('');
        setSobrenome('')
        
    }

    return (
        <section className='formulario'>
            <form onSubmit={salvar}>
                <h2>{props.title}</h2>
                <TextField
                    label="Nome"
                    placeholder="Digite seu nome"
                    required={true}
                    text={nome}
                    onUpdate={text => setNome(text)}
                />

                <TextField
                    label="Sobrenome"
                    placeholder="Digite seu sobrenome"
                    required={true}
                    text={sobrenome}
                    onUpdate={text => setSobrenome(text)}
                />

                <TextField
                    label="Imagem"
                    placeholder="Digite a URL da imagem"
                    required={false}
                    text={imagem}
                    onUpdate={text => setImagem(text)}
                />
                <ComboBox
                    label="Serviço"
                    value={servico}
                    onUpdate={servico => setServico(servico)}
                    items={props.itens} />
                <Button text="Salvar" />
            </form>
        </section>
    );

}

export default Formulario;