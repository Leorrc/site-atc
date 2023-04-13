import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import emailUsers from "../../../utils/data/emailUsers";

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
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    const emailObj = {
      name,
      email,
      contact,
      message,
    };

    emailjs
      .send(
        emailUsers.USER_ID,
        emailUsers.TEMPLATE_ID,
        emailObj,
        emailUsers.PUBLIC_KEY
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setContact("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
                <div>
                  <AppFormGroup>
                    <AppFormControl>
                      <input
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        value={name}
                        type="text"
                        name="user_name"
                        placeholder="SEU NOME"
                      />
                    </AppFormControl>
                  </AppFormGroup>
                  <AppFormGroup>
                    <AppFormControl>
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        value={email}
                        type="email"
                        name="user_email"
                        placeholder="E-MAIL"
                      />
                    </AppFormControl>
                  </AppFormGroup>
                  <AppFormGroup>
                    <AppFormControl>
                      <input
                        onChange={(e) => {
                          setContact(e.target.value);
                        }}
                        value={contact}
                        type="text"
                        name="user_phone"
                        placeholder="SEU CONTATO"
                      />
                    </AppFormControl>
                  </AppFormGroup>
                  <AppFormGroupMessage>
                    <AppFormControl>
                      <input
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                        value={message}
                        type="text"
                        name="user_message"
                        placeholder="MENSAGEM"
                      />
                    </AppFormControl>
                  </AppFormGroupMessage>
                  <AppFormGroupButtons>
                    <AppFormButton onClick={sendEmail}>Enviar</AppFormButton>
                  </AppFormGroupButtons>
                </div>
              </ScreenBodyItem>
            </ScreenBody>
          </Screen1>
        </Container1>
      </Background>
    </>
  );
}
