import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: relative;
`;

export const RedContainer = styled.View`
  width: 100%;
  display: flex;
  padding: 4px 9px;
  align-items: center;
  justify-content: center;
  border: 3px solid black;
  background-color: #cc0000;
  z-index: 10;
`;

export const Text = styled.Text`
  color: white;
  font-size: 19px;
`;

export const Wrraper = styled.View`
  background-color: black;
  height: 85%;
  width: 100%;
  margin-top: 3px;
  margin-left: 4.5px;
  position: absolute;
`;
