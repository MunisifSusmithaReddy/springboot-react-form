import {
    emptyValue,
    isEmailValid,
  } from '../utils';

export const inputFields = [
    {
        label: 'Name',
        id: 'name',
        key: 'name',
        type: 'name',
        method: emptyValue,
        validWhen: false,
        message: 'Please enter your name',
        mandatory: true,
    },
    {
        label: 'Email',
        id: 'email',
        key: 'email',
        type: 'email',
        method: emptyValue,
        validWhen: false,
        message: 'Please enter valid email-id',
        mandatory: true,
    }
]