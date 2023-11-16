import * as S from "./styles";

import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

export const Header = ({
  title = "",
  searchValue = "",
  onChangeText = () => {},
}) => {
  const app = useSelector((state) => state.app);

  return (
    <S.Container>
      <S.ContainerSearch>
        <S.IconImage resizeMode="contain" source={{ uri: app.userLogo }} />
        <S.ContainerInputSearch>
          <FontAwesome name="search" size={24} color="black" />
          <S.InputSearch
            placeholder="Buscar"
            onChangeText={onChangeText}
            value={searchValue}
          />
        </S.ContainerInputSearch>
      </S.ContainerSearch>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
