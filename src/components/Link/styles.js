import styled from 'styled-components/native';

export const Container = styled.Text`
  font-family: 'WorkSans-Bold';
  font-weight: bold;
  padding: 5px;
  align-self: ${props => (props.alignSelf ? props.alignSelf : 'center')};
  justify-content: center;
  font-size: 16px;
  line-height: 19px;
  color: ${props => (props.color ? props.color : '#C94324')};
  margin-top: ${props => props.mt || 0}px;
  margin-bottom: ${props => props.mb || 0}px;
`;
