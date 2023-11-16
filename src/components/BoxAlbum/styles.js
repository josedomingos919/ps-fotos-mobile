import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 10px;
  width: 66px;
  height: 66px;
  border-radius: 5px;
  border: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: bold;
`;

export const BoxAlbum = styled.View`
  width: 66px;
  display: flex;
  text-align: center;
  align-items: center;
`;
