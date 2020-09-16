const validate = values => {
    const errors = {}
    if (!values.password) {
        errors.password = 'Required'
    }
    if (!values.limit && !values.specifyRecipients) {
        errors.limit = 'This is a required field'
    }
    if (values.limit <= 0 || values.limit > 9999) {
        errors.limit = 'Select number between 1 and 9999'
    }
    if (!values.title) {
        errors.title = 'Title is required'
    }
    if (!values.body) {
        errors.body = 'Email body is required'
    }
    if (!values.subject) {
        errors.subject = 'Email subject is required'
    }
    // if (!values.questions) {
    //     errors.questions = 'Create a question!'
    // }
    // if (values.questions) {
    //     values.questions.forEach((q,index) => {
    //         if(!q.question || q.question==="" || !q.answers){
    //             errors.questions = 'Ask a question'
    //         }
    //         if(q.answers){
    //             q.answers.forEach((a,index)=>{
    //                 if(!a || a===""){
    //                     errors.questions = 'Fill an answer'
    //                 }
    //             })
    //         }
    //     })
    // }
    return errors
};

export default validate
