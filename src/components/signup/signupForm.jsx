import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';

// const renderField = ({ input, type, placeholder, meta: { touched, error } }) => (
//   <div className={`input-group ${touched && error ? 'has-error' : ''}`}>
//     <input type={type} placeholder={placeholder} {...input} />
//     { touched && error && <div className="form-error">{error}</div> }
//   </div>
// );

const renderField = (rField) =>{ 
    console.log(rField);
    console.log(rField.type);
    const { input, label, type, meta: { touched, error, warning } } = rField;
    
    return (
    <div>
      {/* <label className={className}>{label}</label> */}
      <div>
      <TextField
      hintText={label}
      type = {type}
      label={label}
      errorText={touched && error}
      {...input}
    />
      <br/>
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
  }



let SignupForm = props => {
    const { handleSubmit } = props;

    return (
      <div className="form-container">
       
        <form onSubmit={handleSubmit}>
           <div className="emailField inputField">
            <Field name="email" component={renderField} type="text" label="email" />
          </div>
          <div className="passwordField inputField">
            <Field name="password" component={renderField} type="password" label="password" />
          </div>
          <div className="confirmpasswordField inputField">
            <Field name="confirmpassword" component={renderField} type="password" label="confirm password" />
          </div>
          <div className="emailField inputField">
            {/* <Field name="agree" component={renderField} type="checkbox" />
            <span> i agree to the <a className="terms">Terms of service</a></span> */}
          </div>
          <div className="submitField inputField">
          <button type="submit" className="btn" className="signupubmit">Create Account</button>
          </div>
        </form>
      </div>
    )
}


const validate = props => {
  const errors = {};
  const fields = ['email', 'password', 'confirmpassword'];

  fields.forEach((f) => {
    if(!(f in props)) {
      errors[f] = `${f} is required`;
    }
  });

  if(props.lastname && props.lastname.length > 20) {
    errors.lastname = "maximum of 20 characters";
  }

  if(props.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props.email)) {
    errors.email = "please provide valid email";
  }

  if(props.password && props.password.length < 6) {
    errors.password = "minimum 6 characters";
  }

  if(props.password !== props.confirmpassword) {
    errors.confirmpassword = "passwords doesn't match";
  }

  return errors;
};


SignupForm = reduxForm({
    form: 'SignupForm',
    validate 
})(SignupForm);

export default SignupForm;