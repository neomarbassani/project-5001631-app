import React, { useRef, useEffect, useState } from 'react';
import { Form } from '@unform/mobile';
import { Scope } from '@unform/core';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';

import { Container } from '../../layout/Auth';
import { AddressFields } from './styles';

import Title from '../../components/Title';
import LogoHeader from '../../components/LogoHeader';
import Input from '../../components/Input';
import MaskedInput from '../../components/MaskedInput';
import InputPicker from '../../components/InputPicker';

import Link from '../../components/Link';
import Button from '../../components/Button';

import locations from '../../services/locations';

import AuthActions from '../../store/ducks/auth';

export default function Register({ navigation }) {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  const formRef = useRef(null);

  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    const statesArray = locations.reduce((acc, state) => {
      return [...acc, state.sigla];
    }, []);
    setStates(statesArray);
  }, []);

  const handleAvailableCities = (stateName) => {
    if (stateName) {
      const availableCities = locations.find(
        (state) => state.sigla === stateName,
      ).cidades;

      setCities(availableCities);
    }
  };

  async function handleSubmit(userData) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Nome completo é obrigatório')
          .min(5, 'Insira seu nome'),
        email: Yup.string()
          .email('Insira um e-mail válido.')
          .required('Um e-mail é obrigatório'),
        phone: Yup.string()
          .required('Telefone é obrigatório')
          .min(10, 'Telefone é obrigatório')
          .max(11, 'Telefone é obrigatório'),
        password: Yup.string()
          .required('Informe sua senha')
          .min(6, 'No mínimo 6 caracteres'),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Senhas não conferem')
          .required('Confirme sua senha'),
      });

      await schema.validate(userData, {
        abortEarly: false,
      });

      delete userData.passwordConfirmation;

      userData.address = {
        state: selectedState,
        city: selectedCity,
      };

      dispatch(AuthActions.signUpRequest(userData));
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  }

  function focusInput(field) {
    const focusInputField = formRef.current.getFieldRef(field);
    focusInputField.focus();
  }

  return (
    <Container>
      <LogoHeader />
      <Title value="Criar uma conta" size={24} mb={16} />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="name"
          label="Nome completo"
          placeholder="Seu nome completo"
          returnKeyType="next"
          onSubmitEditing={() => focusInput('email')}
        />
        <Input
          name="email"
          type="email"
          label="E-mail"
          placeholder="email@exemplo.com.br"
        />
        <MaskedInput
          name="phone"
          label="Telefone"
          type={'cel-phone'}
          placeholder="(00) 00000-0000"
        />
        <Scope path="address">
          <AddressFields>
            <InputPicker
              label="Estado"
              data={states}
              width={40}
              prompt="Escolha um estado"
              selectedValue={selectedState}
              onValueChange={(value) => {
                setSelectedState(value);
                handleAvailableCities(value);
              }}
            />
            <InputPicker
              label="Cidade"
              data={cities}
              width={55}
              prompt="Escolha uma cidade"
              selectedValue={selectedCity}
              onValueChange={(value) => {
                setSelectedCity(value);
              }}
            />
          </AddressFields>
        </Scope>
        <Input
          name="password"
          type="password"
          placeholder="*********"
          label="Senha"
          returnKeyType="next"
          onSubmitEditing={() => focusInput('passwordConfirmation')}
        />
        <Input
          name="passwordConfirmation"
          type="password"
          placeholder="*********"
          label="Confirmar Senha"
        />
      </Form>

      <Link
        content="Já tenho uma conta"
        mb={24}
        mt={24}
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        content="Criar conta"
        loading={loading}
        onPress={() => formRef.current.submitForm()}
      />
    </Container>
  );
}