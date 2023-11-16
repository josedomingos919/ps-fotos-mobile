import { useState } from "react";
import { ButtonRed } from "../../components/button-red";
import { TextInput } from "../../components/text-input";
import { service } from "./../../services";
import { Alert } from "react-native";

import * as S from "./style";

export const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateAccount = async () => {
    setIsLoading(true);

    const response = await service.auth.register({
      nome: username,
      password: password,
      sessionId: new Date().getTime().toString(),
    });

    setIsLoading(false);

    if (response?.status == 201) {
      Alert.alert("Sucesso", "Conta criada com sucesso!");
      navigation.goBack();
    } else {
      Alert.alert("Atenção", "Falha ao criar a conta, tente mais tarde!");
    }
  };

  return (
    <S.Container>
      <S.Title marginBottom={55}>Credenciais</S.Title>
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
        title="Criar"
        marginTop={55}
        isLoading={isLoading}
        onPress={handleCreateAccount}
      />
    </S.Container>
  );
};
