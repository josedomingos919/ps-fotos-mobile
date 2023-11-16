import { useState } from "react";
import { ButtonRed } from "../../components/button-red";
import { TextInput } from "../../components/text-input";
import { service } from "./../../services";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { appSlice } from "../../redux/app/slice";

import * as S from "./style";

export const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);

    const response = await service.auth.login({
      nome: username,
      password: password,
    });

    console.log({ response });

    setIsLoading(false);

    if (response?.status == 201) {
      dispatch(appSlice.actions.setIsLogged(true));
    } else {
      Alert.alert("Atenção", "Falha ao fazer login, tente mais tarde!");
    }
  };

  return (
    <S.Container>
      <S.Title marginBottom={55}>Login</S.Title>
      <TextInput
        value={username}
        marginBottom={35}
        editable={!isLoading}
        placeholder="Nome do utilizador"
        onChangeText={(value) => setUsername(value)}
      />
      <TextInput
        value={password}
        editable={!isLoading}
        secureTextEntry={true}
        placeholder="Palavra-passe"
        onChangeText={(value) => setPassword(value)}
      />
      <ButtonRed
        isLoading={isLoading}
        marginTop={55}
        title="Entrar"
        onPress={() => handleLogin()}
      />
    </S.Container>
  );
};
