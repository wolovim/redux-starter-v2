import _ from 'lodash';

export function isRequired(value, message = 'Required') {
  if (_.isUndefined(value) || _.isNull(value) || value === '') {
    return message;
  }
  return null;
}

export function isEmail(value, message = 'Should be a valid email address') {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (value && !re.test(value)) {
    return message;
  }
  return null;
}

export function containsUppercase(value, message = 'Should contain at least one uppercase letter') {
  const regex = /[A-Z]/g;
  if (value && !regex.test(value)) {
    return message;
  }
  return null;
}

export function containsLowercase(value, message = 'Should contain at least one lowercase letter') {
  const regex = /[a-z]/g;
  if (value && !regex.test(value)) {
    return message;
  }
  return null;
}

export function containsDigit(value, message = 'Should contain at least one digit') {
  const regex = /\d/g;
  if (value && !regex.test(value)) {
    return message;
  }
  return null;
}

export function containsSpecialChars(value, message = 'Should contain at least one special character') {
  const regex = /[^a-zA-Z\d\s:]+/g;
  if (value && !regex.test(value)) {
    return message;
  }
  return null;
}

export function isEqual(value, message, args) {
  if (value !== args) {
    return message || 'This should be '.concat(args);
  }
  return null;
}

export function isLongerThan(value, message, args) {
  if (value && value.length < args) {
    return message || `Should be longer than ${args} chars.`;
  }
  return null;
}

export function isShorterThan(value, message, args) {
  if (value && value.length > args) {
    return message || `Should be shorter than ${args} chars.`;
  }
  return null;
}

export function isNumber(value, message = 'Should be a number') {
  const reg = /^\d+$/;
  if (value && !reg.test(value)) {
    return message;
  }
  return null;
}

export function includes(value, message, args) {
  let collection = args;
  if (_.isString(args)) {
    collection = _.map(args.split(','), (item) => _.trim(item));
  }
  collection = _.map(collection, (item) => _.toLower(item));
  if (_.indexOf(collection, _.toLower(value)) < 0) {
    return message || `Should be one of: ${collection.join(', ')}`;
  }
  return null;
}

export function excludes(value, message, args) {
  let collection = args;
  if (_.isString(args)) {
    collection = _.map(args.split(','), (item) => _.trim(item));
  }
  collection = _.map(collection, (item) => _.toLower(item));
  if (_.indexOf(collection, _.toLower(value)) >= 0) {
    return message || `Should not be one of: ${collection.join(', ')}`;
  }
  return null;
}

export function hasAtLeastOne(value, message = 'At least one must be selected') {
  if (!value || value.length < 1) {
    return message;
  }
  return null;
}
