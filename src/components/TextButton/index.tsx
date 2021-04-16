import React from 'react';
import { GestureResponderEvent } from 'react-native';

import styled from 'styled-components/native';
import { colors } from '../../theme/colors';

import { Props, PropsStyled } from './interface';

const Container = styled.TouchableOpacity<PropsStyled>`
  background-color: ${({ disabled }) => (disabled ? 'green' : 'transparent')};
  align-items:  ${({ right }) => (right ? 'flex-end' : 'flex-start')};
`;

const Label = styled.Text`
  color: ${({ theme }) => colors[theme]};
`;

/**
    ```
      Example: <TextButton text="Hello World" disabled={true} />
    ```
*/

const TextButton = ({ text, disabled = false, color = 'blue-300', right = false, onPress }: Props) => {
  const callOnPress = (e: GestureResponderEvent) => {
    onPress(e);
  }

  return (
    <Container onPress={callOnPress} disabled={disabled} right={right}>
      <Label theme={color}>{text}</Label>
    </Container>
  );
};

export default TextButton;