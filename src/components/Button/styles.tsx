import styled from 'styled-components/native';

import { StyledProps } from './interface';

export const Container = styled.TouchableOpacity<StyledProps>`
  background-color: ${({ theme, variant }) => theme.colors.button[variant].background};
  border-radius: 8px;
  height: 56px;
  line-height: 56px;
  align-items: center;
  justify-content: center;
  margin: 24px 0px 8px;
  width: 100%;
`;

export const Label = styled.Text<StyledProps>`
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme, variant }) => theme.colors.button[variant].fontColor};
`;