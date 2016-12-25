import React from 'react';
import { reduxForm } from 'redux-form';
import * as _ from 'lodash';

const validateReduxForm = (
  options,
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  connectOpt
) => (WrappedComponent) => {
  function mapStateToPropswithInitial(state, ownProps) {
    if (mapStateToProps) {
      return mapStateToProps(state, ownProps);
    }
    return {
      initialValues: ownProps.initialValues,
    };
  }

  class ValidateReduxForm extends React.Component {
    constructor(props) {
      super(props);
      this.instance = {
        validations: [],
        changeCallback: null,
      };
      this.ReduxFormCpt = reduxForm(
          _.merge(
            {
              destroyOnUnmount: true,
              touchOnBlur: true,
            }, options),
          mapStateToPropswithInitial,
          mapDispatchToProps,
          mergeProps,
          connectOpt
        )(WrappedComponent);
      this.validate = this.validate.bind(this);
      this.register = this.register.bind(this);
      this.registerCallback = this.registerCallback.bind(this);
    }
    componentWillUnmount() {
      _.remove(this.instance.validations, () => true);
      this.instance.changeCallback = null;
    }
    validate(values) {
      if (_.isFunction(this.instance.changeCallback)) {
        this.instance.changeCallback(values);
      }
      const filteredValidations = _.filter(this.instance.validations, (item) =>
        _.hasIn(values, item.props.field && item.props.field.name) && !item.props.hidden
      );
      const errorMessages = _.reduce(filteredValidations, (errors, validation) => {
        const value = _.get(values, validation.props.field.name);
        const rules = validation.props.validations;
        let messages = [];
        if (_.isFunction(rules)) {
          messages.push(rules(value));
        } else if (_.isObject(rules) && !_.isArray(rules)) {
          messages.push(rules.func(value, rules.message, rules.args, values));
        } else if (_.isArray(rules)) {
          _.forEach(rules, (rule) =>
            messages.push(rule.func(value, rule.message, rule.args, values))
          );
        }
        if (_.isFunction(validation.validate)) {
          messages = messages.concat(validation.validate(value));
        }
        messages = _.compact(messages);
        _.update(errors, validation.props.field.name, () => messages.join(', '));
        return errors;
      }, {});
      return errorMessages;
    }
    submit() {
      return this.refs.form.submit();
    }
    register(c) {
      if (c) {
        this.instance.validations = _.concat(this.instance.validations, c);
      }
    }
    registerCallback(f) {
      this.instance.changeCallback = f;
    }
    render() {
      return (
        <this.ReduxFormCpt
          ref="form"
          {...this.props}
          {...this.state}
          formName={options.form}
          registerField={this.register}
          registerOnChange={this.registerCallback}
          validate={this.validate}
        />
      );
    }
  }
  ValidateReduxForm.displayName = `ValidateReduxForm(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  ValidateReduxForm.WrappedComponent = WrappedComponent;

  return ValidateReduxForm;
};

export default validateReduxForm;
