import React from "react";
import LottieFiles from "./lottiefiles";
import * as S from "./styled";

const NoSearch = () => {
  return (
    <S.Wrapper>
      <div>
      <h1>Nenhum usuário pesquisado</h1>
     < LottieFiles />
      </div>
      
    </S.Wrapper>
  );
};

export default NoSearch;