import { GestureResponderEvent } from "react-native";

export interface Props {
    text: string;
    disabled?: boolean;
    color?: string
    right?: boolean;
    onPress: (event: GestureResponderEvent) => void;
}

export interface PropsStyled {
    disabled?: boolean;
    theme?: string
    right?: boolean;
}