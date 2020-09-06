const validate = values => {
    const errors = {}
    if (!values.password) {
        errors.password = 'Required'
    }
    if (!values.limit) {
        errors.limit = 'This is a required field'
    }
    if(values.limit <= 0 || values.limit > 9999){
        errors.limit = 'Select number between 1 and 9999'
    }
    if(!values.title){
        errors.title = 'Title is required'
    }
    if(!values.body){
        errors.body = 'Email body is required'
    }
    if(!values.subject){
        errors.subject = 'Email subject is required'
    }
    return errors
};

export default validate
