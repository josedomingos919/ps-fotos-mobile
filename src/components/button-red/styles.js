import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 55px;
  width: 200px;
  background-color: black;
  margin-top: ${({ marginTop = 0 }) => marginTop}px;
`;

export const RedContainer = styled.View`
  height: 54px;
  width: 200px;
  border: 3px solid black;
  background-color: #cc0000;
  margin-left: -3px;
  margin-top: -3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: white;
  font-size: 25px;
`;
