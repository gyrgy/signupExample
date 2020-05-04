import React, { ReactNode } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { formTestID } from 'src/constants/testIDs';

interface FormProps {
  children: ReactNode;
  testID?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
);

const Form = (props: FormProps) => {
  const { root } = useStyles();
  const { children, testID } = props;

  return (
    <form className={root} noValidate autoComplete="off" data-testid={testID || formTestID}>
      {children}
    </form>
  );
};

export default Form;
