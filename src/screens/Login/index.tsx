import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import TextButton from '../../components/TextButton';
import Button from '../../components/Button';
import { colors } from "../../theme/colors";
import logo from '../../assets/logo.png'
import {
  ContainerLogin,
  Logo,
  HeaderInfo,
  Title,
  ViewInputs
} from "./styled";

const Login = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { navigate } = useNavigation()

  return (
    <ContainerLogin
      contentContainerStyle={{
        paddingHorizontal: 24,
        paddingBottom: 64
      }}
    >
      <Logo source={logo} />
      <HeaderInfo>
        <Title>Fazer Login</Title>
      </HeaderInfo>
      <ViewInputs>

        <Input
          value={email}
          setValue={setEmail}
          placeholder="E-mail"
          placeholderTextColor={colors['gray-300']}
        />

        <Input
          value={password}
          setValue={setPassword}
          placeholder="Senha"
          placeholderTextColor={colors['gray-300']}
          secureTextEntry
        />

      </ViewInputs>
      <TextButton
        onPress={() => navigate('forgot-password')}
        text="Esqueci minha senha"
        color="gray-300"
        right
      />
      <Button
        onPress={() => { }}
        variant={!!email && !!password ? 'success' : 'disabled'}
        text="Entrar"
        disabled={!!email && !!password ? false : true}
      />

    </ContainerLogin>
  )
}

export default Login;