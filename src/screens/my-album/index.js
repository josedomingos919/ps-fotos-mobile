import { useMyAlbumScreenState } from "./state";

import * as S from "./style";

export const MyAlbumScreen = () => {
  const {} = useMyAlbumScreenState();

  return (
    <S.Container>
      <S.Title marginBottom={55}>Meus Albuns</S.Title>
    </S.Container>
  );
};
