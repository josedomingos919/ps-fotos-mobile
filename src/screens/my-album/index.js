import { useState } from "react";
import { Header } from "../../components/header";
import { FontAwesome } from "@expo/vector-icons";
import { BoxAlbum } from "../../components/BoxAlbum";

import * as S from "./style";

export const MyAlbumScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <S.Container>
      <Header
        title="Meus Albuns"
        searchValue={search}
        onChangeText={setSearch}
      />
      <S.Body>
        <S.Row>
          <BoxAlbum title="Escola" />
          <BoxAlbum title="Escola" />
          <BoxAlbum title="Escola" />
        </S.Row>
        <S.Row>
          <BoxAlbum title="Escola" />
          <BoxAlbum title="Escola" />
          <BoxAlbum title="Escola" />
        </S.Row>
        <S.Row>
          <BoxAlbum title="Escola" />
          <BoxAlbum title="Escola" />
          <BoxAlbum title="Escola" />
        </S.Row>
      </S.Body>
      <S.Footer>
        <S.ButtonAdd onPress={() => navigation.navigate("AddAlbum")}>
          <FontAwesome name="plus" size={32} color="white" />
        </S.ButtonAdd>
      </S.Footer>
    </S.Container>
  );
};
