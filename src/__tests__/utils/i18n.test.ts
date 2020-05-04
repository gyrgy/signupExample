import { t } from 'src/utils/i18n';

describe('test i18n', () => {
  it('test 18n returns the required text based on the key', () => {
    const i18nText = t('userForm.userNameFieldLabel');
    const expectedText = 'name';

    expect(i18nText).toEqual(expectedText);
  });
});