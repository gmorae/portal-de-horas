export const colors = {
    'success': '#04D361',
    'danger': '#E33D3D',
    'blue-100': '#E2EAF2',
    'blue-200': '#5DA0E3',
    'blue-300': '#367EC7',
    'blue-400': '#0F65BA',
    'blue-500': '#1A5DA0',
    'blue-600': '#152536',
    'gray-100': '#DCDFE5',
    'gray-200': '#BCC2CC',
    'gray-300': '#989FA6',
    'white': '#FFF',
    'ice': '#FAFAFC',
    'background': '#FFF',
    'black': '#0B0D17'
};

export interface ColorOptions {
    button: ColorsButtonSchema;
    status: ColorsStatusSchema;
}

export type ButtonColorScheme = {
    background: string;
    fontColor: string;
};

export interface ColorsButtonSchema {
    success: ButtonColorScheme;
    danger: ButtonColorScheme;
    disabled: ButtonColorScheme;
    next: ButtonColorScheme;
    maps: ButtonColorScheme;
}

export type StatusColorScheme = {
    fontColor: string;
};

export interface ColorsStatusSchema {
    success: StatusColorScheme;
    blue: StatusColorScheme;
    danger: StatusColorScheme;
}

export type ColorsButtonOptions = keyof ColorsButtonSchema;