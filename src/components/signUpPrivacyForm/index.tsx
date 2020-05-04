import React, { ChangeEvent } from 'react';
import { ButtonPrimary, Checkbox, Form } from 'src/components/common';
import { PrivacyFormCheckboxes } from 'src/constants/enums';
import { t } from 'src/utils/i18n';
import { privacyFormTestID, privacyFormTrayCheckboxTestID, privacyFormOtherCheckboxTestID } from 'src/constants/testIDs';

interface PrivacyFormProps {
  trayProductUpdatesChecked: boolean;
  otherProductsUpdatesChecked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  submitForm: () => void;
}

const PrivacyForm = (props: PrivacyFormProps) => {
  const {
    trayProductUpdatesChecked,
    otherProductsUpdatesChecked,
    onChange,
    submitForm
  } = props;

  return (
    <Form testID={privacyFormTestID}>
      <Checkbox
        name={PrivacyFormCheckboxes.TrayProductUpdatesCheckboxName}
        label={t('privacyForm.trayProductUpdatesCheckboxLabel')}
        checked={trayProductUpdatesChecked}
        onChange={onChange}
        testID={privacyFormTrayCheckboxTestID}
      />
      <Checkbox
        name={PrivacyFormCheckboxes.OtherProductsUpdatesCheckboxName}
        label={t('privacyForm.otherProductsUpdatesCheckboxLabel')}
        checked={otherProductsUpdatesChecked}
        onChange={onChange}
        testID={privacyFormOtherCheckboxTestID}
      />
      <ButtonPrimary label="submit" onClick={submitForm} />
    </Form>
  );
};

export default PrivacyForm;