import styled from "styled-components/native";

import { colors } from "../../theme/colors";

export const ContainerOnboarding = styled.ScrollView`
    flex: 1;
`;

export const Image = styled.Image`
    width: 100%;
`;

export const Content = styled.View`
    flex: 1;
    margin: 48px 24px 24px;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 26px;
    line-height: 36px;
    letter-spacing: 6px;
    color: ${colors["blue-300"]};
`;

export const Button = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    background: ${colors["blue-300"]};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 96px

`;