
export const initialState = {
    values: {
      id: 0,
      firstName: '',
      lastName: '',
      mobileNumber: '',
      telephoneNumber: '',
      email: '',
      address: '',
    },
    errors: {},
    isFormEmpty: true,
};
  
export const formValidationReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIELD_VALUE':
        return {
            ...state,
            values: {
            ...state.values,
            [action.field]: action.value
            },
            errors: {
            ...state.errors,
            [action.field]: validateField(action.field, action.value),
            },
        };
        case 'IS_FORM_EMPTY':
        return {
            ...state,
            isFormEmpty : IsFormEmpty(state.values),
        };
        default:
        return state;
    }
};


const validateField = (field, value) => {
    const telephoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    const mobileRegex = /^\d{10}$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (field === 'firstName') {
        if (!value) {
            return 'firstName is required.';
        }
    }
    if (field === 'lastName') {
        if (!value) {
            return 'Last Name is required.';
        }
    }
    if (field === 'mobileNumber') {
        if (!value) {
            return 'mobileNumber is required.';
        }
        else if (
            !mobileRegex.test(value)
        ) {
           return "Invalid mobile number";
        }
    }
    if (field === 'telephoneNumber') {
        if (!value) {
            return 'telephoneNumber is required.';
        }
        else if (
            !telephoneRegex.test(value)
        ) {
           return "Invalid Telephone number";
        }
    }
    if (field === 'email') {
        if (!value) {
            return 'email is required.';
        }
        else if (
            !emailRegex.test(value)
        ) {
           return "Invalid email address";
        }
    }
    if (field === 'address') {
        if (!value) {
            return 'address is required.';
        }
    }
    return '';
}

const IsFormEmpty = (data) => {
    const isFormEmpty = Object.values(data).every((value) => {
        return !value;
    });

    return isFormEmpty;
}




  