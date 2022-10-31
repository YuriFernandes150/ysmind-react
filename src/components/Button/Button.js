import './Button.css'

const Button = (props) => {

    return (
        <button className='bt'>
            {props.text}
        </button>
    );

}

export default Button;