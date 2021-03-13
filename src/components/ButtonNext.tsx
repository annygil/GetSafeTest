interface Props {
    onClick: any,
    disabled: boolean,
    name: string
}
export const ButtonNext = ( props: Props ) => (
    <button 
        onClick={props.onClick} 
        disabled={props.disabled} >
        {props.name}
    </button> 
)
