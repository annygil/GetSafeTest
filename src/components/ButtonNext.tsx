import '../shared/components/buyFlow/button.css';
interface Props {
    onClick: any,
    disabled: boolean,
    name: string
}
export const ButtonNext = ( props: Props ) => (
    <div className='buttonContainer'>
        <button 
            onClick={props.onClick} 
            disabled={props.disabled} >
            {props.name}
        </button> 
    </div>
)
