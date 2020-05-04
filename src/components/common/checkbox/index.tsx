import React, { ChangeEvent } from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { checkboxTestID } from 'src/constants/testIDs';

interface InputCheckboxProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  testID?: string
}


const InputCheckbox = (props: InputCheckboxProps) => {

  const { name, label, checked, onChange, testID } = props;

  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} name={name} color="primary" data-testid={testID || checkboxTestID} />}
      label={label}
    />
  );
};

export default InputCheckbox;
