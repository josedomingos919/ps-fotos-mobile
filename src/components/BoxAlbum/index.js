import * as S from "./styles";

import { Entypo } from "@expo/vector-icons";

export const BoxAlbum = ({ title = "", ...restProps }) => {
  return (
    <S.BoxAlbum>
      <S.Container {...restProps}>
        <Entypo name="image" size={32} color="red" />
      </S.Container>
      <S.Title>{title}</S.Title>
    </S.BoxAlbum>
  );
};
