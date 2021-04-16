
export interface PropsInput {
    value: string | null;
    setValue: (text: string) => void;
    placeholder: string;
    icon?: React.ReactNode | React.Component;
    placeholderTextColor?: string;
    secureTextEntry?: boolean
}