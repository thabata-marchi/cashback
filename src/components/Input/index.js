import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { InputCSS, TextError } from './styles';

export default function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = "";
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <InputCSS ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <TextError>{ [error].map(err => err) }</TextError>}
    </>
  ) 
}