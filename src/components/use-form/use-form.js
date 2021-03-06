import { useState } from "react";

const useForm = (callback) => {
  const [formFields, setFormFields] = useState({
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
  return {
    formFields,
    onChange,
  };
};
export default useForm;
