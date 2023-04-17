import { TitleCenter } from "../../01-Utils/TitleCenter";
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
  AppFormButton,
} from "./styles";

export function Contact() {
  return (
    <>
      <TitleCenter title="ENTRE EM CONTATO">
        <p>
          Você pode entrar em contato com a equipe da ATC/SC mandando um e-mail
          para atcscbr@gmail.com
        </p>
      </TitleCenter>
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
                <form
                  action="https://formsubmit.co/atcscbr@gmail.com"
                  method="POST"
                >
                  <AppFormGroup>
                    <AppFormControl>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="SEU NOME"
                      />
                    </AppFormControl>
                  </AppFormGroup>
                  <AppFormGroup>
                    <AppFormControl>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="E-MAIL"
                      />
                    </AppFormControl>
                  </AppFormGroup>
                  <AppFormGroup>
                    <AppFormControl>
                      <input
                        required
                        type="text"
                        name="Contato"
                        placeholder="SEU CONTATO"
                      />
                    </AppFormControl>
                  </AppFormGroup>
                  <AppFormGroupMessage>
                    <AppFormControl>
                      <input
                        required
                        type="text"
                        name="message"
                        placeholder="MENSAGEM"
                      />
                    </AppFormControl>
                    <input type="hidden" name="_captcha" value="false" />
                  </AppFormGroupMessage>
                  <AppFormGroupButtons>
                    <AppFormButton type="submit">Enviar</AppFormButton>
                  </AppFormGroupButtons>
                </form>
              </ScreenBodyItem>
            </ScreenBody>
          </Screen1>
        </Container1>
      </Background>
    </>
  );
}
