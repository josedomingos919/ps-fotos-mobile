import { ActivityIndicator } from "react-native";

import * as S from "./styles";

export const ButtonRedFlex = ({
  title,
  marginTop,
  isLoading = false,
  ...restProps
}) => {
  return (
    <S.Container {...restProps} marginTop={marginTop} disabled={isLoading}>
      <S.RedContainer>
        {isLoading ? (
          <ActivityIndicator color="#ffff" size="small" />
        ) : (
          <S.Text>{title}</S.Text>
        )}
      </S.RedContainer>
      <S.Wrraper />
    </S.Container>
  );
};
