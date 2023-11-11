import { ActivityIndicator } from "react-native";

import * as S from "./styles";

export const ButtonDark = ({ title, marginTop, isLoading = false }) => {
  return (
    <S.Container marginTop={marginTop} disabled={isLoading}>
      <S.RedContainer>
        {isLoading ? (
          <ActivityIndicator color="black" size="small" />
        ) : (
          <S.Text>{title}</S.Text>
        )}
      </S.RedContainer>
      <S.Wrraper />
    </S.Container>
  );
};