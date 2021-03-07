import { useEffect, useState } from "react";

import errorsForm from "../errors-form";

const useForm = (callback, defaltValues, setIsSibmiting, isSibmiting) => {
  const [formFields, setFormFields] = useState(defaltValues);
  const [errors, setErros] = useState({});

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormFields((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErros(errorsForm(formFields));
    setIsSibmiting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSibmiting) {
      callback();
    }
  });

  return [formFields, onChange, handleSubmit, errors];
};
export default useForm;
