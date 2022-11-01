import './CardServico.css'

const CardServico = (props) => {

    return (

        <div className='card-servico'>
            <div className='header' style={{
                backgroundColor : props.headerColor
            }}>
                <img src={props.imagem} alt='Yuri Fernandes' />
            </div>
            <div className='footer'>
                <h4>{props.nome}</h4>
                <h5>{props.servico}</h5>
            </div>
        </div>

    );

}

export default CardServico;