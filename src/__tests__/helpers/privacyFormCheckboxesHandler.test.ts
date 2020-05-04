import { PrivacyFormCheckboxes } from 'src/constants/enums';
import {
  privacyFormCheckboxesHandler
} from 'src/helpers/privacyFormCheckboxesHandler';

describe('test privacyFormCheckboxesHandler', () => {

  let testPrivacyTrayProductUpdatesChecked = false;
  let testPrivacyOtherProductsUpdatesChecked = false;
  const spyHandleSetPrivacyTrayProductUpdatesChecked = jest.fn(
    (value: boolean) => {testPrivacyTrayProductUpdatesChecked = value;});
  const spyHandleSetPrivacyOtherProductsUpdatesChecked = jest.fn(
    (value: boolean) => {testPrivacyOtherProductsUpdatesChecked = value;});

  it('sets correct value for the first checkbox update', () => {
    privacyFormCheckboxesHandler({
      checkboxName: PrivacyFormCheckboxes.TrayProductUpdatesCheckboxName,
      handleSetPrivacyTrayProductUpdatesChecked:
        spyHandleSetPrivacyTrayProductUpdatesChecked,
      privacyTrayProductUpdatesChecked:
        testPrivacyTrayProductUpdatesChecked,
      handleSetPrivacyOtherProductsUpdatesChecked:
        spyHandleSetPrivacyOtherProductsUpdatesChecked,
      privacyOtherProductsUpdatesChecked:
        testPrivacyOtherProductsUpdatesChecked,
    });

    expect(testPrivacyTrayProductUpdatesChecked).toBe(true);
    expect(testPrivacyOtherProductsUpdatesChecked).toBe(false);
  });

  it('sets correct value for the second checkbox update', () => {
    privacyFormCheckboxesHandler({
      checkboxName: PrivacyFormCheckboxes.OtherProductsUpdatesCheckboxName,
      handleSetPrivacyTrayProductUpdatesChecked:
        spyHandleSetPrivacyTrayProductUpdatesChecked,
      privacyTrayProductUpdatesChecked:
        testPrivacyTrayProductUpdatesChecked,
      handleSetPrivacyOtherProductsUpdatesChecked:
        spyHandleSetPrivacyOtherProductsUpdatesChecked,
      privacyOtherProductsUpdatesChecked:
        testPrivacyOtherProductsUpdatesChecked,
    });

    expect(testPrivacyTrayProductUpdatesChecked).toBe(true);
    expect(testPrivacyOtherProductsUpdatesChecked).toBe(true);
  });

  it('sets back both values', () => {
    privacyFormCheckboxesHandler({
      checkboxName: PrivacyFormCheckboxes.TrayProductUpdatesCheckboxName,
      handleSetPrivacyTrayProductUpdatesChecked:
        spyHandleSetPrivacyTrayProductUpdatesChecked,
      privacyTrayProductUpdatesChecked:
        testPrivacyTrayProductUpdatesChecked,
      handleSetPrivacyOtherProductsUpdatesChecked:
        spyHandleSetPrivacyOtherProductsUpdatesChecked,
      privacyOtherProductsUpdatesChecked:
        testPrivacyOtherProductsUpdatesChecked,
    });
    privacyFormCheckboxesHandler({
      checkboxName: PrivacyFormCheckboxes.OtherProductsUpdatesCheckboxName,
      handleSetPrivacyTrayProductUpdatesChecked:
        spyHandleSetPrivacyTrayProductUpdatesChecked,
      privacyTrayProductUpdatesChecked:
        testPrivacyTrayProductUpdatesChecked,
      handleSetPrivacyOtherProductsUpdatesChecked:
        spyHandleSetPrivacyOtherProductsUpdatesChecked,
      privacyOtherProductsUpdatesChecked:
        testPrivacyOtherProductsUpdatesChecked,
    });

    expect(testPrivacyTrayProductUpdatesChecked).toBe(false);
    expect(testPrivacyOtherProductsUpdatesChecked).toBe(false);
  });

  it('returns false as default if wrong name given', () => {
    const fieldName = 'wrong name';
    const returnValue = privacyFormCheckboxesHandler({
      checkboxName: fieldName,
      handleSetPrivacyTrayProductUpdatesChecked:
        spyHandleSetPrivacyTrayProductUpdatesChecked,
      privacyTrayProductUpdatesChecked:
        testPrivacyTrayProductUpdatesChecked,
      handleSetPrivacyOtherProductsUpdatesChecked:
        spyHandleSetPrivacyOtherProductsUpdatesChecked,
      privacyOtherProductsUpdatesChecked:
        testPrivacyOtherProductsUpdatesChecked,
    });

    expect(returnValue).toBe(fieldName);
  });
});