import React, { ChangeEvent, FocusEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import { inputFieldTestID } from 'src/constants/testIDs';
import { InputFieldType } from 'src/constants/types';

interface InputFieldProps {
  type: InputFieldType;
  label: string;
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  errorHelperText?: string;
  testID?: string;
}

const InputField = (props: InputFieldProps) => {
  const {
    type,
    label,
    name,
    onChange,
    onBlur,
    value,
    disabled,
    required,
    error,
    errorHelperText,
    testID,
  } = props;
  return (
    <TextField
      type={type}
      fullWidth
      label={label}
      name={name}
      variant="outlined"
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      disabled={disabled}
      required={required}
      error={error}
      helperText={errorHelperText}
      data-testid={testID || inputFieldTestID}
    />
  );
};

export default InputField;
