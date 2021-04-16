import React from 'react';

import { ActivityIndicator, GestureResponderEvent } from 'react-native';

import { Props } from './interface';

import { Container, Label } from './styles';

/**
    ```
      Example: <Button
                onPress={() => function()}
                variant='success'
                text="HELLO BUTTON"
            />
    ```
*/
const Button = ({
  disabled = false,
  loading = false,
  onPress,
  text,
  variant,
}: Props) => {
  const buttonVariant = disabled ? 'disabled' : variant;

  const callOnPress = (e: GestureResponderEvent) => {
    if (!disabled && !loading) {
      onPress(e);
    }
  };

  return (
    <Container
      disabled={disabled}
      onPress={callOnPress}
      variant={buttonVariant}>
      <>
        {loading ? (
          <ActivityIndicator size="small" />
        ) : (
            <>
              <Label numberOfLines={1} variant={buttonVariant}>
                {text}
              </Label>
            </>
          )}
      </>
    </Container>
  );
};

export default Button;