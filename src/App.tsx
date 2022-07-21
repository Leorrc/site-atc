import React from 'react';
import { GlobalStyles } from './styles/globalstyles'
import { Container, Header, Logo, Main, FirstTitle, SecondTitle, StateFlag, DivButton } from './styles/styles'

import Button from './components/Button'
import pixelToRem from './utils/pxToRem'


function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <Container flex='column' margin={pixelToRem(24, 112, 50)}>

        <Header>
        <Logo />
        </Header>

        <Main>
          <FirstTitle>Bem-Vindo(a) ao site da ATC-SC</FirstTitle>

          <SecondTitle>Associação de Terapias Cognitivas do Estado de Santa Catarina</SecondTitle>

        <StateFlag />

        <DivButton>
            <Button text="ASSOCIE-SE" fullWidth />
        </DivButton>

        </Main>
        
      </Container>
      
    </div>
  );
}

export default App;
