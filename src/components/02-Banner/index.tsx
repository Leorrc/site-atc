import React from 'react';
import Button from '../03-Button';
import pixelToRem from '../../utils/pxToRem';
import { Bg, ContainerBanner, DivGrid, DivImage, DivText } from './styles'


import img from '../../images/hero-img.png'



export function Banner() {
  return (
    <>
    <Bg>
      <ContainerBanner flex="column" margin={pixelToRem(0, 150)}>
        <DivGrid>
          
          <DivImage>
            <img src={img} />
          </DivImage>

          <DivText>
            <h1>
              Bem-Vindo(a) ao site da ATC-SC
            </h1>
            <p>
              Associação de Terapias Cognitivas do Estado de Santa Catarina
            </p>
            <Button text="Inscreva-se agora" />
          </DivText>
          
        </DivGrid>
      </ContainerBanner>
    
    </Bg>
    </>
  );
}
