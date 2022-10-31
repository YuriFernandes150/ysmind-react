import './ComboBox.css'

const ComboBox = (props) => {

    return (
        <div className='combobox'>
            <label>{props.label}</label>

            <select
                value={props.value}
                onChange={event => props.onUpdate(event.target.value)}
            >
                {props.items.map(item => {
                    return <option key={item}>
                        {item}
                    </option>
                })}
            </select>
        </div>
    );

}

export default ComboBox;