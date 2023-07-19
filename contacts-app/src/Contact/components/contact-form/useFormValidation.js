import { useReducer } from 'react';

import { initialState, formValidationReducer } from './formValidationReducer';

const useFormValidation = (setOpen, handleInsert, handleEdit) => {
  const [state, dispatch] = useReducer(formValidationReducer, initialState);

  const handleSetValues = (data) => {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        dispatch({ type: 'SET_FIELD_VALUE', field: key, value });
      }
    }
    dispatch({ type: 'IS_FORM_EMPTY'});
  }


  const handleChange = event => {
    const { name, value } = event.target;
    dispatch(
      { 
        type: 'SET_FIELD_VALUE', 
        field: name, 
        value: value 
      });
  };
  
const isFormFieldValid = (data) => {
  for (let key in data) {
      const value = data[key];
      if(value && key !== 'id'){ 
          console.log(key)
          console.log(value)  
          return false;
      }        
  }
  return true;
}

const handleSubmit = event => {
  event.preventDefault();
  handleSetValues(state.values)

  if ( 
    isFormFieldValid(state.errors) 
    && Object.keys(state.errors).length !== 0 
    && !state.isFormEmpty
  ) {
    if(state.values.id === 0){
      handleInsert(state.values)
      setOpen(false)
    }
    else{
      handleEdit(state.values.id, state.values)
      setOpen(false)
    }
  }
};

  return {
    values: state.values,
    handleSetValues,
    errors: state.errors,
    handleChange,
    handleSubmit
  };
};

export default useFormValidation;