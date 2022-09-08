import {
  Background,
  Container1,
  Screen1,
  ScreenHeader,
  ScreenHeaderLeft,
  ScreenHeaderButton,
  ScreenHeaderRight,
  ScreenBody,
  ScreenBodyItem,
  AppTitle,
  AppFormGroup,
  AppFormGroupButtons,
  AppFormControl,
  AppFormGroupMessage,
  AppFormButton
} from './styles'

export function Contact() {
  return (
    <>
      <Background>
        <Container1>
          <Screen1>
            <ScreenHeader>
              <ScreenHeaderLeft>
                <ScreenHeaderButton>
                  <div className="close"></div>
                  <div className="maximize"></div>
                  <div className="minimize"></div>
                </ScreenHeaderButton>
              </ScreenHeaderLeft>
              <ScreenHeaderRight>
                <div className="screen-header-ellipsis" />
                <div className="screen-header-ellipsis" />
                <div className="screen-header-ellipsis" />
              </ScreenHeaderRight>
            </ScreenHeader>
            <ScreenBody>
              <ScreenBodyItem>
                <div className="left">
                  <AppTitle>
                    <span>Mande sua mensagem</span>
                  </AppTitle>
                </div>
              </ScreenBodyItem>
              <ScreenBodyItem>
                <div className="app-form">
                  <AppFormGroup>
                    <AppFormControl>
                      <input placeholder="SEU NOME" />
                    </AppFormControl>
                  </AppFormGroup>
                  <AppFormGroup>
                    <AppFormControl>
                      <input placeholder="E-MAIL" />
                    </AppFormControl>
                  </AppFormGroup>
                  <AppFormGroup>
                    <AppFormControl>
                      <input placeholder="SEU CONTATO" />
                    </AppFormControl>
                  </AppFormGroup>
                  <AppFormGroupMessage>
                    <AppFormControl>
                      <input placeholder="MENSAGEM" />
                    </AppFormControl>
                  </AppFormGroupMessage>
                  <AppFormGroupButtons>
                    <AppFormButton>CANCEL</AppFormButton>
                    <AppFormButton>SEND</AppFormButton>
                  </AppFormGroupButtons>
                </div>
              </ScreenBodyItem>
            </ScreenBody>
          </Screen1>
        </Container1>
      </Background>
    </>
  )
}
