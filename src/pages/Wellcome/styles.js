import styled from 'styled-components/native';

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-top: 70px;
`;

export const BottomBox = styled.View`
  background: #ffffff90;
  align-items: center;
  width: 100%;
  margin-top: auto;
  padding: 8px 19px 30px 19px;
`;

export const BottomBoxText = styled.Text`
  font-family: 'WorkSans-Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #774d37;
`;

export const Pagination = styled.View`
  flex-direction: row;
  margin: 16px 0 8px 0;
`;

export const ActiveDot = styled.View`
  width: 45px;
  height: 5px;
  background: #d69d2b;
  border-radius: 166.667px;
  margin-right: 10px;
`;

export const InactiveDot = styled.View`
  width: 5px;
  height: 5px;
  background: #f0f0f0;
  border-radius: 166.667px;
  margin-right: 10px;
`;
