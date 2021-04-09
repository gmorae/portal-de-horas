import styled from "styled-components/native";

import { colors } from "../../theme/colors";

export const Container = styled.View`
    flex: 1;
    padding: 36px 16px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-weight: 300;
    font-size: 24px;
    color: ${colors.black};
    line-height: 34px;
`;