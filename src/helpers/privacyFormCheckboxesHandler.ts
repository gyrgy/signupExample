import { PrivacyFormCheckboxes } from 'src/constants/enums';

/**
 * This helper is for set privacy form checkbox values in state on change event.
 */

interface PrivacyFormCheckboxesHandlerProps {
  checkboxName: string;
  handleSetPrivacyTrayProductUpdatesChecked: (value: boolean) => void;
  privacyTrayProductUpdatesChecked: boolean;
  handleSetPrivacyOtherProductsUpdatesChecked: (value: boolean) => void;
  privacyOtherProductsUpdatesChecked: boolean;
}

export const privacyFormCheckboxesHandler = (
  props: PrivacyFormCheckboxesHandlerProps
) => {
  const {
    checkboxName,
    handleSetPrivacyTrayProductUpdatesChecked,
    privacyTrayProductUpdatesChecked,
    handleSetPrivacyOtherProductsUpdatesChecked,
    privacyOtherProductsUpdatesChecked,
  } = props;

  switch (checkboxName) {
    case PrivacyFormCheckboxes.TrayProductUpdatesCheckboxName: {
      return handleSetPrivacyTrayProductUpdatesChecked(
        !privacyTrayProductUpdatesChecked
      );
    }
    case PrivacyFormCheckboxes.OtherProductsUpdatesCheckboxName: {
      return handleSetPrivacyOtherProductsUpdatesChecked(
        !privacyOtherProductsUpdatesChecked
      );
    }
    default:
      return checkboxName;
  }
};
