import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import {
  Container,
  InputField,
  Label,
  ToogleVisility,
  Content,
  ToogleVisilityImage,
  InputError,
} from './styles';

import eye from '../../assets/eye.png';

export default function Input({ label, type, name, ...rest }) {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    type === 'password' ? setPasswordVisibility(true) : null;
  }, [type]);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,

      ref: inputRef.current,

      path: 'value',

      clearValue(ref) {
        ref.value = '';

        ref.clear();
      },

      setValue(ref, value) {
        ref.setNativeProps({ text: value });

        inputRef.current.value = value;
      },

      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Content>
        <InputField
          ref={inputRef}
          defaultValue={defaultValue}
          type={type}
          secureTextEntry={passwordVisibility}
          onChangeText={(value) => {
            if (inputRef.current) {
              inputRef.current.value = value;
            }
          }}
          {...rest}
        />
        {type === 'password' && (
          <ToogleVisility
            onPress={() => setPasswordVisibility(!passwordVisibility)}>
            <ToogleVisilityImage source={eye} />
          </ToogleVisility>
        )}
      </Content>
      {error && <InputError>{error}</InputError>}
    </Container>
  );
}
