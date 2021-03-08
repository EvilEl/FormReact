const errorsForm = (values) => {
  let errors = {};
  if (!values.firstName.trim()) {
    errors.firstName = "FirstName required";
  } else if (values.firstName.length < 6) {
    errors.firstName = "FirstName needs to be 6 characters or more";
  }
  if (!values.lastName.trim()) {
    errors.lastName = "LastName required";
  } else if (values.firstName.length < 6) {
    errors.lastName = "LastName needs to be 6 characters or more";
  }
  if (!values.email) {
    errors.email = "email required";
  } else if (!/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }
  if (values.password2 !== values.password) {
    errors.password2 = "Password dont to match";
  }
  return errors;
};

export default errorsForm;
