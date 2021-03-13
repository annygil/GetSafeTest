

interface errors {
    emailError?: string,
    ageError?: string
}
const initialValues: errors = {
    emailError: '',
    ageError: ''
}

export default function validateInputs  ( value: any, prop: string) : errors{
    let _errors: errors = initialValues;
    let re=/\S+@\S+\.\S+/;
    
    switch (prop) {
        case 'email':
            if ( !value.length ) {
                _errors.emailError = 'Email required';
            } 
            else if ( !re.test(value) ) {
                _errors.emailError = 'Email address is invalid';
            } 
            else {
                _errors.emailError = '';
            }
            return _errors;  

        case 'age':
            if( !value.toString().length ){
                _errors.ageError = 'Age is required';
            }
            else if( value < 16 && typeof value !== 'number' ) {
                _errors.ageError = 'Age is invalid';
            } 
            else {
                _errors.ageError = '';
            }
            return _errors; 
            
        default:
            return _errors;  
    }


    
}