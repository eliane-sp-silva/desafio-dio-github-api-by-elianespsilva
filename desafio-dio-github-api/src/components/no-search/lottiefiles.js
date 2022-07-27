import React, { useEffect, useRef } from "react";
import * as S from "./styled";
import lottie from 'lottie-web';



function LottieFiles() {
  
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      repeat: false,
      autoplay: true,
      animationData: require ('../../assets/98723-search-users.json')   
     })
  }, [])

  return (
    <S.Wrapper>
      <S.StyledLottie>
      <div className="container" ref={container}>
        </div> 
      </S.StyledLottie>
           
    </S.Wrapper>
  );
};

export default LottieFiles;