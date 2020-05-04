import {
  validateEmail,
  validateRequiredTextField,
  validateNotRequiredTextField,
  validatePassword
} from 'src/utils/validators';

describe('test validators', () => {
  it('test validateEmail', () => {
    const emailWithoutTLD = 'example@example';
    const validateEmailWithoutTLD = validateEmail(emailWithoutTLD);
    expect(validateEmailWithoutTLD).toBeFalsy();

    const emailWithShortTLD = 'example@example.c';
    const validateEmailWithShortTLD = validateEmail(emailWithShortTLD);
    expect(validateEmailWithShortTLD).toBeFalsy();

    const emailWithoutLocalPart = '@example.com';
    const validateEmailWithoutLocalPart = validateEmail(emailWithoutLocalPart);
    expect(validateEmailWithoutLocalPart).toBeFalsy();

    const emailWithoutDomain = 'example@.com';
    const validateEmailWithoutDomain = validateEmail(emailWithoutDomain);
    expect(validateEmailWithoutDomain).toBeFalsy();

    const validEmailWithSpecialCharacter = 'example>@example.com';
    const validateValidEmailWithSpecialCharacter =
      validateEmail(validEmailWithSpecialCharacter);
    expect(validateValidEmailWithSpecialCharacter).toBeFalsy();

    const validEmail = 'john.doe@example.com';
    const validateValidEmail = validateEmail(validEmail);
    expect(validateValidEmail).toBe(true);
  });

  it('tests validateRequiredTextField', () => {
    const emptyText = '';
    const validateEmptyText = validateRequiredTextField(emptyText);
    expect(validateEmptyText).toBeFalsy();

    const specialChar = '<';
    const validateSpecialChar = validateRequiredTextField(specialChar);
    expect(validateSpecialChar).toBeFalsy();

    const spaceCharacter = ' ';
    const validateSpace = validateRequiredTextField(spaceCharacter);
    expect(validateSpace).toBeFalsy();

    const spaceCharAtTheBeginning = ' started with space character';
    const validateSpaceCharAtTheBeginning =
      validateRequiredTextField(spaceCharAtTheBeginning);
    expect(validateSpaceCharAtTheBeginning).toBeFalsy();

    const spaceCharAtTheEnd = 'space is the last character ';
    const validateSpaceCharAtTheEnd =
      validateRequiredTextField(spaceCharAtTheEnd);
    expect(validateSpaceCharAtTheEnd).toBeFalsy();

    const text = 'test text with space character';
    const validateText = validateRequiredTextField(text);
    expect(validateText).toBe(true);
  });

  it('tests validateNotRequiredTextField', () => {
    const emptyText = '';
    const validateEmptyText = validateNotRequiredTextField(emptyText);
    expect(validateEmptyText).toBe(true);

    const text = 'test text with space character';
    const validateText = validateNotRequiredTextField(text);
    expect(validateText).toBe(true);
  });

  it('tests validatePassword', () => {
    const shortPassword = '1Abcdefg';
    const validateShortPassword = validatePassword(shortPassword);
    expect(validateShortPassword).toBeFalsy();

    const passwordWithoutCapitalLetter = '1abcdefgh';
    const validatePasswordWithoutCapitalLetter =
      validatePassword(passwordWithoutCapitalLetter);
    expect(validatePasswordWithoutCapitalLetter).toBeFalsy();

    const passwordWithoutNumber = 'Abcdefghi';
    const validatePasswordWithoutNumber =
      validatePassword(passwordWithoutNumber);
    expect(validatePasswordWithoutNumber).toBeFalsy();

    const validPassword = '1Abcdefgh';
    const validateValidPassword = validatePassword(validPassword);
    expect(validateValidPassword).toBe(true);
  });
});