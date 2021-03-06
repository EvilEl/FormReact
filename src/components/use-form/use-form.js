import React from "react";

const useForm = (callback) => {
  const [formFields, setFormFields] = React.useState({
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    email: "",
  });
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormFields((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };
  callback();
  return {
    formFields: formFields,
    onChange: onChange,
  };
};
export default useForm;
