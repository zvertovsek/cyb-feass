export const Model = {
    name: {
        value: "",
        validation: {
            required: true
        },
        isValid: false,
        touched: false
    },
    sex: {
        value: "",
        validation: {
            required: true
        },
        isValid: false,
        touched: false
    },
    age: {
        value: "",
        validation: {
            required: true,
            isNumeric: true
        },
        isValid: false,
        touched: false
    },
    country: {
        value: "",
        validation: {
            required: true
        },
        isValid: false,
        touched: false
    },
    dateCreated: {
        value: "",
        validation: {},
        isValid: true,
        touched: false
    }
}

export const validateField = (value, rules) => {
    let isValid = true;
    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;
    }

    return isValid;
}