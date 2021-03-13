
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
        <label>{props.label} </label>
        <input
            id={props.id}
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            />
        
        {props.errorMessage && <p>{props.errorMessage}</p>}
    </>
)

