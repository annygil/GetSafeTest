import React from 'react';
import useForm  from '../Hooks/Validations/useForm';
import validate from '../Hooks/Validations/validateInputs';
import { FormInput } from './../components/FormInput';
import { ButtonNext } from './../components/ButtonNext';
interface AgeStepProps {
    cb: (field: string, value: number) => void,
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
    const { handleError, values, errors } = useForm( validate );
    const handleNextStep = () => {
        if( values.age.toString().length > 0 && errors.ageError?.length === 0 ){
            props.cb('age', values.age)
        }
    };
    return <>
        <FormInput 
            label="Age: "
            id='age'
            type='number'
            name= 'age'
            placeholder='Enter your age'
            onChange={ handleError }
            errorMessage={ errors.ageError }
            value={ values.age.toString() }/>
        <ButtonNext
            onClick={ handleNextStep } 
            disabled={ (values.age > 10 && errors.ageError?.length === 0) ? false : true }
            name='Next'
        />
    </>;
};

export default AgeStep;