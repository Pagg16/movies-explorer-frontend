import { useState, useCallback } from "react";
const validator = require("validator");

export function useFormAndValidation() {
  const [values, setValues] = useState({
    inputOne: "",
    inputTwo: "",
    inputThree: "",
  });
  const [errors, setErrors] = useState({
    inputOne: false,
    inputTwo: false,
    inputThree: false,
  });
  const [isValid, setIsValid] = useState({
    inputOne: false,
    inputTwo: false,
    inputThree: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid({
      ...isValid,
      [name]: (function (e) {
        if (e.target.type === "email") {
          !validator.isEmail(e.target.value)
            ? setErrors({
                ...errors,
                [name]: "Ведены неккоректные данные",
              })
            : setErrors({
                ...errors,
                [name]: "",
              });
          return validator.isEmail(e.target.value);
        } else {
          return e.target.validity.valid;
        }
      })(e),
    });
  };

  const resetForm = useCallback(
    (
      newValues = { inputOne: "", inputTwo: "", inputThree: "" },
      newErrors = { inputOne: false, inputTwo: false, inputThree: false },
      newIsValid = { inputOne: false, inputTwo: false, inputThree: false }
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
}
