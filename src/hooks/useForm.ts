import { ChangeEvent, useState } from 'react';

export const useForm = <T extends Object>(initialState: T) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const resetForm = () => {
    setFormValues(initialState);
  };

  return { formValues, resetForm, handleInputChange };
};
