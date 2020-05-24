import { ValidationError } from 'yup';

interface Errors {
  // CAN BE ANYTHING IN LEFT SIDE JUST IF IS A STRING
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
