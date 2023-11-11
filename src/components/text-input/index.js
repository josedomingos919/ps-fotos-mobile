import * as S from "./styles";

export const TextInput = ({ placeholderTextColor = "black", ...restProps }) => {
  return (
    <S.TextInput placeholderTextColor={placeholderTextColor} {...restProps} />
  );
};
