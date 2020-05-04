import React from 'react';
import { Button } from '@material-ui/core';
import { primaryButtonTestID } from 'src/constants/testIDs';

interface PrimaryButtonProps {
  label: string;
  onClick: () => void;
  testID?: string;
}

const ButtonPrimary = (props: PrimaryButtonProps) => {
  const { label, onClick, testID } = props;

  return (
    <Button variant="contained" color="primary" onClick={onClick} data-testid={testID || primaryButtonTestID}>
      {label}
    </Button>
  );
};

export default ButtonPrimary;
