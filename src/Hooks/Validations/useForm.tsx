import { useState} from 'react'

interface errors {
    emailError?: string,
    ageError?:string
}
const initialValues:errors= {
    emailError: '',
    ageError: ''
}


const useForm = ( validate: any, _values: any ) => {
    const [values, setValues] = useState(_values)
    const [errors,setErrors] = useState(initialValues);


    const handleError = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value} = e.target;

        setValues({
            ...values,
            [name]:value
        });
        
        setErrors(validate(value,name)); 
        
        return e.target.value;
    }

    return { handleError, values,  errors }
}
export default useForm