import React, { ChangeEvent, FocusEvent, useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { Content, TabPanel, Fade } from 'src/components/common';
import {
  SignUpPrivacyForm,
  SignUpUserForm,
  SignUpTabMenu,
  SignUpDone,
} from 'src/components';
import {
  userFormFieldsStateHandler,
  userFormFieldsValidationHandler,
  userFormSubmitHandler,
  privacyFormCheckboxesHandler
} from 'src/helpers';
import {
  UserFormDataType,
  UserFormStateType,
  PrivacyFormDataType,
  PrivacyFormStateType
} from 'src/constants/types';

interface SignUpProps {
  userFormStoreData: UserFormStateType;
  submitUserForm: (payload: UserFormDataType) => void;
  privacyFormStoreData: PrivacyFormStateType;
  submitPrivacyForm: (payload: PrivacyFormDataType) => void;
}

const SignUp = (props: SignUpProps) => {
  const {
    userFormStoreData,
    submitUserForm,
    privacyFormStoreData,
    submitPrivacyForm
  } = props;

  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [userNameFieldValue, setUserNameFieldValue] =
    useState<string>(userFormStoreData.name);
  const [userNameFieldError, setUserNameFieldError] =
    useState<boolean>(false);
  const [userRoleFieldValue, setUserRoleFieldValue] =
    useState<string>(userFormStoreData.role);
  const [userRoleFieldError, setUserRoleFieldError] =
    useState<boolean>(false);
  const [userEmailFieldValue, setUserEmailFieldValue] =
    useState<string>(userFormStoreData.email);
  const [userEmailFieldError, setUserEmailFieldError] =
    useState<boolean>(false);
  const [userPasswordFieldValue, setUserPasswordFieldValue] =
    useState<string>(userFormStoreData.password);
  const [userPasswordFieldError, setUserPasswordFieldError] =
    useState<boolean>(false);
  const [
    privacyTrayProductUpdatesChecked,
    setPrivacyTrayProductUpdatesChecked
  ] =
    useState<boolean>(privacyFormStoreData.trayProductUpdates);
  const [
    privacyOtherProductsUpdatesChecked,
    setPrivacyOtherProductsUpdatesChecked
  ] =
    useState<boolean>(privacyFormStoreData.otherProductsUpdates);

  useEffect(() => {
    if (userFormStoreData.submitted && !privacyFormStoreData.submitted) {
      setActiveTabIndex(1);
    } else if (userFormStoreData.submitted && privacyFormStoreData.submitted) {
      setActiveTabIndex(2);
    }
  }, [userFormStoreData, privacyFormStoreData]);

  const handleTabMenuChange = (index: number) => {
    setActiveTabIndex(index);
  };

  const handleSetUserNameFieldValue = (value: string) => {
    setUserNameFieldValue(value);
  };

  const handleSetUserNameFieldError = (value: boolean) => {
    setUserNameFieldError(value);
  };

  const handleSetUserRoleFieldValue = (value: string) => {
    setUserRoleFieldValue(value);
  };

  const handleSetUserRoleFieldError = (value: boolean) => {
    setUserRoleFieldError(value);
  };

  const handleSetUserEmailFieldValue = (value: string) => {
    setUserEmailFieldValue(value);
  };

  const handleSetUserEmailFieldError = (value: boolean) => {
    setUserEmailFieldError(value);
  };

  const handleSetUserPasswordFieldValue = (value: string) => {
    setUserPasswordFieldValue(value);
  };

  const handleSetUserPasswordFieldError = (value: boolean) => {
    setUserPasswordFieldError(value);
  };

  const handleSetPrivacyTrayProductUpdatesChecked = (value: boolean) => {
    setPrivacyTrayProductUpdatesChecked(value);
  };

  const handleSetPrivacyOtherProductsUpdatesChecked = (value: boolean) => {
    setPrivacyOtherProductsUpdatesChecked(value);
  };

  const handleUserFormFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    userFormFieldsStateHandler({
      fieldName: event.target.name,
      fieldValue: event.target.value,
      userNameFieldCallback: handleSetUserNameFieldValue,
      userRoleFieldCallback: handleSetUserRoleFieldValue,
      userEmailFieldCallback: handleSetUserEmailFieldValue,
      userPasswordFieldCallback: handleSetUserPasswordFieldValue
    });
  };

  const handleUserFormFieldBlur =
    (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      userFormFieldsValidationHandler({
        fieldName: event.target.name,
        fieldValue: event.target.value,
        userNameFieldCallback: handleSetUserNameFieldError,
        userRoleFieldCallback: handleSetUserRoleFieldError,
        userEmailFieldCallback: handleSetUserEmailFieldError,
        userPasswordFieldCallback: handleSetUserPasswordFieldError
      });
    };

  const handleSubmitUserForm = () => {
    userFormSubmitHandler({
      userNameFieldValue,
      userRoleFieldValue,
      userEmailFieldValue,
      userPasswordFieldValue,
      setUserNameFieldError: handleSetUserNameFieldError,
      setUserRoleFieldError: handleSetUserRoleFieldError,
      setUserEmailFieldError: handleSetUserEmailFieldError,
      setUserPasswordFieldError: handleSetUserPasswordFieldError,
      submitUserForm,
    });
  };

  const handlePrivacyCheckboxesChange =
    (event: ChangeEvent<HTMLInputElement>) => {
      privacyFormCheckboxesHandler({
        checkboxName: event.target.name,
        handleSetPrivacyTrayProductUpdatesChecked,
        privacyTrayProductUpdatesChecked,
        handleSetPrivacyOtherProductsUpdatesChecked,
        privacyOtherProductsUpdatesChecked,
      });
    };

  const handlePrivacyFormSubmit = () => {
    submitPrivacyForm({
      trayProductUpdates: privacyTrayProductUpdatesChecked,
      otherProductsUpdates: privacyOtherProductsUpdatesChecked
    });
  };

  return (
    <Container>
      <Content>
        <SignUpTabMenu
          selectedIndex={activeTabIndex}
          onChange={handleTabMenuChange}
        />
        <TabPanel selectedIndex={activeTabIndex} index={0}>
          <Fade fadeIn={activeTabIndex === 0}>
            <SignUpUserForm
              userNameFieldValue={userNameFieldValue}
              userNameFieldError={userNameFieldError}
              userRoleFieldValue={userRoleFieldValue}
              userRoleFieldError={userRoleFieldError}
              userEmailFieldValue={userEmailFieldValue}
              userEmailFieldError={userEmailFieldError}
              userPasswordFieldValue={userPasswordFieldValue}
              userPasswordFieldError={userPasswordFieldError}
              handleChange={handleUserFormFieldChange}
              handleBlur={handleUserFormFieldBlur}
              handleSubmit={handleSubmitUserForm}
            />
          </Fade>
        </TabPanel>
        <TabPanel selectedIndex={activeTabIndex} index={1}>
          <Fade fadeIn={activeTabIndex === 1}>
            <SignUpPrivacyForm
              onChange={handlePrivacyCheckboxesChange}
              trayProductUpdatesChecked={privacyTrayProductUpdatesChecked}
              otherProductsUpdatesChecked={privacyOtherProductsUpdatesChecked}
              submitForm={handlePrivacyFormSubmit}
            />
          </Fade>
        </TabPanel>
        <TabPanel selectedIndex={activeTabIndex} index={2}>
          <Fade fadeIn={activeTabIndex === 2}>
            <SignUpDone />
          </Fade>
        </TabPanel>
      </Content>
    </Container>
  );
};

export default SignUp;
