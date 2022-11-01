import CardServico from '../CardServico/CardServico';
import './Servico.css'

const Servico = (props) => {

    return (
        /*if*/(props.servicos.length > 0) ?
            <section className='servico' style={
                {
                    backgroundColor: props.corSecundaria
                }
            }>
                <h3 style={{
                    borderColor: props.corPrimaria
                }}>{props.nome}</h3>
                <section className='servico-content'>

                    {props.servicos.map(servico =>
                        <CardServico headerColor={props.corPrimaria} key={servico.nome} nome={servico.nome + " " + servico.sobrenome}
                            imagem={servico.imagem}
                            servico={servico.servico} />)}

                </section>
            </section>

            : ''
    );

}

export default Servico;