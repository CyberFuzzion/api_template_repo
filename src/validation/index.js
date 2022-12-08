import {
    signIn
  } from './validators/rules';
    
  const getValidator = (validationName) => {
    const rules = {
      signIn,
    };
    
    return rules[validationName];
  };
    
  export default getValidator;