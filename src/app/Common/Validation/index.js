const FormValidator = (validations, type, state) => {
    const onBlurValidation = {};
    const validate = (state) => {
        const validation = valid();
        validations.forEach((rule) => {
          if (!validation[rule.key].isInValid ) {
            const field_value = state[rule.key];
            const args = rule.args || [];
            const validationMethod = rule.method;
            if (validationMethod && validationMethod(field_value, state, args) !== rule.validWhen) {
              validation[rule.key] = { isInValid: true, message: rule.message };
              validation.isValid = false;
            }
          }
        });
        return validation;
      }
    
      const valid = () => {
        const validation = {};
        validations.forEach((rule) => {
          validation[rule.key] = {
            isInValid: false, message: '',
          };
        });
    
        return { isValid: true, ...validation };
      }
    
      const validateOnBlur = (state) => {
        const key = Object.keys(state)[0];
        const validationObj = validate(state);
        onBlurValidation[key] = validationObj[key];
    
        return { isValid: validationObj.isValid, ...onBlurValidation };
      }
  
      if(type == 'on_submit') {
        return validate(state);
      } else {
        return validateOnBlur(state);
      }
    }
  
    export default FormValidator;