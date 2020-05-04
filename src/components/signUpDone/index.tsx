import React from 'react';
import { Alert } from '@material-ui/lab';
import { signUpDoneTestID } from 'src/constants/testIDs';
import { t } from 'src/utils/i18n';

interface SignUpDoneProps {
  testID?: string;
}

const SignUpDone = (props: SignUpDoneProps) => {
  const { testID } = props;
  return (
    <div data-testid={testID || signUpDoneTestID}>
      <Alert severity="success">
        {t('doneForm')}
      </Alert>
    </div>
  );
};

export default SignUpDone;