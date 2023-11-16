import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 75px;
  background-color: #fff;
`;

export const Title = styled.Text`
  color: black;
  font-size: 25px;
  font-weight: bold;
`;

export const Body = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 35px;
  padding: 0px 40px;
`;

export const Row = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  padding: 40px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  background-color: red;
  border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  border-radius: 70px;
`;
