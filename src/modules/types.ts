import { FocusEvent } from 'react';

import { ValidatorType } from './Validators';

export type ErrorsType = { [name: string]: string } | null;
export type OnChangeFieldsType =
  | ((updates: { [name: string]: IField }, updatedField: { [name: string]: IField }) => void)
  | { [name: string]: (args: IField, allFields: IFields) => void };

export type FormBuilderPropTypes = {
  errors?: ErrorsType;
  withForm?: boolean;
  renderForm?: Function;
  children?: React.ReactNode;
  onSubmit: (values: IFieldsToSubmit, fieldsWithError: IFields | null) => Promise<any> | void;
  onChangeFields?: OnChangeFieldsType;
  validateOnBlur?: boolean;
  initialValues?: Record<string, any>;
};

export type StateTypes = {
  isFieldsTouched: boolean;
  fields: IFields;
  invalidFields: Set<string>;
  valid: boolean;
  submitting: boolean;
};

export interface IFormContext {
  registerField: (field: RegisterFieldType) => void;
  unregister: (args: { name: string }) => void;
  onChange: (field: OnChangeType) => void;
  onSubmit: (event: any) => void;
  fields: IFields;
  isFieldsTouched: boolean;
}

export type IFieldsToSubmit = {
  [name: string]: any;
};

export interface IFields {
  [name: string]: IField;
}

export interface IField {
  name: string;
  value?: any;
  error?: any;
  validate?: ValidateType;
  touched?: boolean;
  errorMessage?: ErrorMessageType;
}

export type OnChangeType = {
  name: string;
  value: any;
  error?: any;
};

export type RegisterFieldType = {
  name: string;
  value: any;
  validate?: ValidateType;
  errorMessage?: ErrorMessageType;
  error?: any;
  componentProps: object;
};

export type ValidateType = ValidatorType<any> | Array<ValidatorType<any>>;
export type ErrorMessageType = string | string[];

type ComponentBasePropTypes = {
  name: string;
  value: any;
  onChange: (value: string) => void;
  error: any;
  onBlur?: (event: FocusEvent<any>) => void;
};

export type ComponentPropTypes<T> = React.ComponentType<T & ComponentBasePropTypes>;
