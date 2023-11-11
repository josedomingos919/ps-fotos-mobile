import { ButtonRed } from "../../components/button-red";
import { ButtonWhite } from "../../components/button-white";

import logo from "../../assets/icon.png";

import * as S from "./style";

export const HomeScreen = () => {
  return (
    <S.Container>
      <S.Logo resizeMode="contain" source={logo} />
      <S.Title marginTop={40}>PS Fotos</S.Title>
      <ButtonRed marginTop={100} title="Entrar" />
      <ButtonWhite marginTop={30} title="Criar Conta" />
    </S.Container>
  );
};
