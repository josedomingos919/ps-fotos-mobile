import * as S from "./styles";

export const TextInputLine = ({
  placeholderTextColor = "black",
  ...restProps
}) => {
  return (
    <S.TextInput placeholderTextColor={placeholderTextColor} {...restProps} />
  );
};
