import React from 'react';
import { WrapperInput, Input as InputStyle } from './styles';
import { PropsInput } from './interface';
import { colors } from '../../theme/colors';

/**
    ```
      Example: <Input
                value={email}
                setValue={setEmail}
                placeholder="E-mail"
            />
    ```
*/

const Input = ({
    value,
    setValue,
    placeholder,
    placeholderTextColor = colors['gray-300'],
    secureTextEntry = false
}: PropsInput) => {
    return (
        <WrapperInput>
            <InputStyle
                value={value}
                placeholder={placeholder}
                onChangeText={(text: string) => setValue(text)}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry ? true : false}
            />
        </WrapperInput>
    );
};

export default Input;