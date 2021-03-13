import React, { useState,useEffect } from 'react';
import useForm  from '../Hooks/Validations/useForm';
import validate from '../Hooks/Validations/validateInputs';
import { FormInput } from './../components/FormInput';
import { ButtonNext } from './../components/ButtonNext';
interface EmailStepProps {
    cb: (field: string, value: string) => void,
}


const EmailStep: React.FC<EmailStepProps> = ( props ) => {
    const { handleError, values, errors } = useForm( validate );

    const handleNextStep = () => {
        if( values.email.length > 0 && errors.emailError?.length === 0){
            props.cb('email', values.email)
        }
   };

    return <>
        <FormInput 
            label='Email: '
            id='email'
            type='email'
            name= 'email'
            placeholder='Enter your email'
            onChange={handleError}
            errorMessage={errors.emailError}
            value={values.email}/>
        <ButtonNext
            onClick={handleNextStep} 
            disabled={values.email.length>0 && errors.emailError?.length==0 ? false : true}
            name='Next'
        />
    </>;
};


export default EmailStep;