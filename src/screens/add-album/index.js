import { View } from "react-native";
import { ButtonDark } from "../../components/button-dark";
import { ButtonRed } from "../../components/button-red";
import { ButtonRedFlex } from "../../components/button-red-flex";
import { TextInput } from "../../components/text-input";
import { TextInputLine } from "../../components/text-input-line";

import * as S from "./style";

export const AddAlbumScreen = () => {
  return (
    <S.Container>
      <S.Title marginBottom={55}>Criar Álbum</S.Title>
      <TextInputLine
        marginBottom={35}
        placeholderTextColor="black"
        placeholder="Nome do Álbum"
      />
      <S.Row marginBottom={45}>
        <TextInputLine
          flex="1"
          placeholderTextColor="black"
          placeholder="Adicionar Utilizador"
        />
        <S.Gap />
        <ButtonRedFlex title="Adicionar" />
      </S.Row>
      <S.Row>
        <ButtonDark title="Carregar Fotos" />
        <S.Gap />
        <TextInputLine flex="1" placeholderTextColor="black" placeholder="" />
      </S.Row>

      <ButtonRed marginTop={70} title="Criar Álbum" />
    </S.Container>
  );
};
