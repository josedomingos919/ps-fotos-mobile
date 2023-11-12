import { ButtonDark } from "../../components/button-dark";
import { ButtonRed } from "../../components/button-red";
import { ButtonRedFlex } from "../../components/button-red-flex";
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
        <S.GrowView>
          <TextInputLine
            placeholderTextColor="black"
            placeholder="Adicionar Utilizador"
          />
        </S.GrowView>
        <S.Gap />
        <ButtonRedFlex title="Adicionar" />
      </S.Row>
      <S.Row>
        <ButtonDark title="Carregar Fotos" />
        <S.Gap />
        <S.GrowView>
          <TextInputLine placeholderTextColor="black" placeholder="" />
        </S.GrowView>
      </S.Row>
      <ButtonRed marginTop={70} title="Criar Álbum" />
    </S.Container>
  );
};
