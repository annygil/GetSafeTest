import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../shared/components/buyFlow/SummaryStep.css'
import { ButtonNext } from './../components/ButtonNext';
interface SummaryStepProps {
    cb: (field: string, value: string) => void,
    collectedData:{
        email: string,
        age: number
    },
};

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
    const redirect  = () => {
        props.cb('email', props.collectedData.email)
    }
    return <>
        <div>Email: {props.collectedData.email}</div>
        <div>Age: {props.collectedData.age}</div>
        <div className='btn-container'>
            <ButtonNext
                onClick = { redirect } 
                disabled = { false }
                name = 'Editar'
            />    
        </div>
        <div className='link-container'><Link to='/'>Purchase</Link></div>
    </>;
};

export default SummaryStep;