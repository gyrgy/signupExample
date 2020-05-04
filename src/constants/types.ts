// types
export type InputFieldType = 'text' | 'number' | 'password';

// data types
export interface UserFormDataType {
  name: string;
  role: string;
  email: string;
  password: string;
}

export interface PrivacyFormDataType {
  trayProductUpdates: boolean;
  otherProductsUpdates: boolean;
}

// store types
export interface UserFormStateType extends UserFormDataType {
  submitted: boolean;
}

export interface PrivacyFormStateType extends PrivacyFormDataType {
  submitted: boolean;
}

// root store type
export interface RootStoreType {
  userForm: UserFormStateType;
  privacyForm: PrivacyFormStateType;
}
