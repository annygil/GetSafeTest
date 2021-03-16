
import '../shared/components/buyFlow//input.css';
interface Props {
    id: string,
    name: string,
    value: string,
    onChange: any,
    placeholder: string,
    label: string,
    type: string,
    errorMessage?: any

}

export const  FormInput = (props:Props) => (
    <>
    <div className='input-field-container'>
        <label>{props.label} </label>
        <input
            className={ props.errorMessage && 'error'}
            id={props.id}
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            />
    </div>
        
        {props.errorMessage && <p className="error">{props.errorMessage}</p>}
    </>
)

