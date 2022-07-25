import React from 'react';
import { GlobalStyles } from './styles/globalstyles'
import { Container, Header, ContainerHeader, Main, FirstTitle, SecondTitle, StateFlag, DivButton } from './styles/styles'

import Button from './components/Button'
import pixelToRem from './utils/pxToRem'
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
    <GlobalStyles />
        <Header>
          <NavBar />
        </Header>
      <Container flex='column' margin={pixelToRem(24, 112, 50)}>



        <Main>
          <FirstTitle>Bem-Vindo(a) ao site da ATC-SC</FirstTitle>

          <SecondTitle>Associação de Terapias Cognitivas <p>do Estado de Santa Catarina</p></SecondTitle>

        

        <DivButton>
          <Button text="ASSOCIE-SE" fullWidth />
        </DivButton>
        
        </Main>

        

        
      </Container>
      
    </div>
  );
}

export default App;
