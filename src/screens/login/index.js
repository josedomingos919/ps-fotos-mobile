import { ButtonRed } from "../../components/button-red";
import { TextInput } from "../../components/text-input";

import * as S from "./style";

export const LoginScreen = () => {
  return (
    <S.Container>
      <S.Title marginBottom={55}>Nova Conta</S.Title>
      <TextInput marginBottom={35} placeholder="Nome do utilizador" />
      <TextInput secureTextEntry={true} placeholder="Palavra-passe" />
      <ButtonRed marginTop={55} title="Criar" />
    </S.Container>
  );
};
