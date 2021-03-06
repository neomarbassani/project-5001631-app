import React, {useRef, useState} from 'react';
import {Form} from '@unform/mobile';
import Snackbar from 'react-native-snackbar';

import * as Yup from 'yup';

import Container from '../../layout/Auth';

import Title from '../../components/Title';
import LogoHeader from '../../components/LogoHeader';
import Input from '../../components/Input';
import Link from '../../components/Link';
import Button from '../../components/Button';
import api from '../../services/api';

export default function SignIn({navigation}) {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    setLoading(true);
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um e-mail válido.')
          .required('Um e-mail é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('user/forgot-password', {
        email: data.email,
        device: 'mobile',
      });

      setLoading(false);

      Snackbar.show({
        text: 'Um link para redefinição de senha foi enviado para seu e-mail.',
        duration: Snackbar.LENGTH_LONG,
        textColor: '#fff',
        backgroundColor: '#008000',
      });

      navigation.navigate('Login');
    } catch (err) {
      Snackbar.show({
        text: 'Email não encontrado, por favor registre-se !',
        duration: Snackbar.LENGTH_LONG,
        textColor: '#fff',
        backgroundColor: '#ff0000',
      });

      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
      setLoading(false);
    }
  }

  return (
    <Container>
      <LogoHeader mt={50} mb={40} />
      <Title value="Recuperar Senha" size={14} mb={16} />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          label="E-mail"
          placeholder="email@exemplo.com.br"
        />
      </Form>

      <Link
        content="Voltar para Login"
        mt={15}
        mb={24}
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        mb="16px"
        content="Recuperar Senha"
        onPress={() => formRef.current.submitForm()}
        loading={loading}
      />
    </Container>
  );
}
