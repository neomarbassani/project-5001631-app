import styled from 'styled-components/native';

export const Text = styled.Text`
  font-family: 'WorkSans-Bold';
  font-weight: bold;
  font-size: ${props => (props.size ? props.size : 0)}px;
  margin-top: ${props => (props.mt ? props.mt : 0)}px;
  margin-bottom: ${props => (props.mb ? props.mb : 0)}px;
  color: ${props => (props.color ? props.color : '#281100')};
  width: 100%;
`;
