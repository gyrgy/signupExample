export const validateEmail = (email: string): boolean => {
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return re.test(email);
};

export const validateRequiredTextField = (value: string): boolean => {
  const re = /^[a-zA-Z-,]+(\s?[a-zA-Z-,])*$/;
  return re.test(value);
};

export const validateNotRequiredTextField = (value: string): boolean => {
  if (!value.length) {
    return true;
  }

  return validateRequiredTextField(value);
};

export const validatePassword = (value: string): boolean => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{9,}$/;
  return re.test(value);
};
