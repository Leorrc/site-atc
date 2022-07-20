import React from 'react';
import { GlobalStyles } from './styles/globalstyles'
import { Container, Header, Logo, Main, FirstTitle, SecondTitle, StateFlag } from './styles/styles'

import Button from './components/Button'
import pixelToRem from './utils/pxToRem'


function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <Container>

      <Header>
      <Logo />
      </Header>

      <Main>
        <FirstTitle>Bem-Vindo(a) ao site da ATC-SC</FirstTitle>

        <SecondTitle>Associação de Terapias Cognitivas do Estado de Santa Catarina</SecondTitle>

        <StateFlag />

      </Main>
        
      </Container>
      
    </div>
  );
}

export default App;
