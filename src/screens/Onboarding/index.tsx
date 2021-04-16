import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import {
  ContainerOnboarding,
  Image,
  Title,
  Content,
  Button
} from './styled';
import { colors } from '../../theme/colors';

export default function Onboarding() {
  const { navigate } = useNavigation()
  return (
    <ContainerOnboarding>
      <Image source={require('../../assets/onboarding.png')} />
      <Content>
        <Title>Escaneie o QrCode para conseguir computar o seu ponto de trabalho.</Title>
        <Button onPress={() => navigate('login')}>
          <Icon name="arrow-right" color={colors.white} size={24} />
        </Button>
      </Content>
    </ContainerOnboarding>
  );
}