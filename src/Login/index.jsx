import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import validate from 'common/Forms/utils/validations.jsx';
import loginUser from 'Login/actions/loginUser.jsx';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
);

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(formInputs) {
    console.log(formInputs);
    this.props.loginUser(formInputs);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="email" type="email" component={renderField} label="Email"/>
        <Field name="password" type="password" component={renderField} label="password"/>
        <div>
          <button type="submit" disabled={submitting} onClick={handleSubmit(this.onSubmit)}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    )
  }
}

const LoginPageForm = reduxForm({
  form: 'LoginPage',
  validate,
})(LoginPage);

export default connect(null, {
  loginUser,
})(LoginPageForm);
