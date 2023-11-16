import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 10px 25px;
  border-bottom-width: 2px;
  border-bottom-color: black;
  margin-top: -55px;
`;

export const ContainerSearch = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const IconImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  border: 3px solid black;
`;

export const Title = styled.Text`
  color: black;
  font-size: 25px;
  font-weight: bold;
  text-align: left;
`;

export const ContainerInputSearch = styled.View`
  display: flex;
  align-items: center;
  margin-left: 15px;
  flex-direction: row;
  border: 3px solid black;
  flex: 1;
  border-radius: 10px;
  padding: 0px 10px;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  height: 100%;
  margin-left: 10px;
`;
