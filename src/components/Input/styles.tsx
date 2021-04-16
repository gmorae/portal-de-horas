import styled from 'styled-components/native';
import { colors } from '../../theme/colors';

export const WrapperInput = styled.View`
  background: ${colors['white']};
  height: 64px;
  border-radius: 8px;
  border: 1px solid ${colors['gray-100']};
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  color: ${colors['blue-200']};
  height: 64px;
  padding: 0px 24px;
`;