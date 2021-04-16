import { DefaultTheme } from 'styled-components';

import { ColorOptions, colors } from './colors';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: ColorOptions;
    }
}

const stylertTheme: DefaultTheme = {
    colors: {
        button: {
            danger: {
                background: colors.danger,
                fontColor: colors.white
            },
            disabled: {
                background: colors['gray-100'],
                fontColor: colors['gray-300']
            },
            next: {
                background: colors['blue-400'],
                fontColor: colors.white
            },
            success: {
                background: colors.success,
                fontColor: colors.white
            },
            maps: {
                background: colors['blue-100'],
                fontColor: colors['blue-300']
            }
        },
        status: {
            success: {
                fontColor: colors.success
            },
            blue: {
                fontColor: colors['blue-400']
            },
            danger: {
                fontColor: colors.danger
            }
        }
    }
};

export { stylertTheme };