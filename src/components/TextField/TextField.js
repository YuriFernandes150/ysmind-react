import './TextField.css'

const TextField = (props) => {

    const typeEvent = (event) =>{
        props.onUpdate(event.target.value);
    }

    return (
        <div className="textfield-div" onInput={typeEvent}>
            <label className="textfield-label">{props.label}</label>

            <input className="textfield-input"
            onChange={typeEvent}
            value={props.text} 
            placeholder={props.placeholder} 
            required = {props.required}
            />
                
        </div>
    );
}

export default TextField;