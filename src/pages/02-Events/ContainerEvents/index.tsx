import { TitleCenter } from "../../../components/01-Utils/TitleCenter";
import { Section, Container, SectionBg, Card, Paragrafo } from "./styles";
import imgUrl from '../../../images/full/evento1.png'
import Button from "../../../components/01-Utils/Button";

export function ContainerEvents() {
  return (
    <>
      <SectionBg />
      <Section>
        <Container>
          <TitleCenter
            title="Eventos ATC-SC"
            span="2023"
            marginBotton="2rem"
          >
            <p>Aqui serão publicados nossos eventos.</p>
          </TitleCenter>

          <Card>
            <img src={imgUrl} alt='Banner evento' />

            <Paragrafo>
              <span>
                I JORNADA INTERNACIONAL DE TERAPIAS COGNITIVO-COMPORTAMENTAIS DE SANTA CATARINA
              </span>
              <p>
                É com imensa alegria que dividimos com vocês a realização da I Jornada Internacional de Terapias Cognitivo-Comportamentais de Santa Catarina: Tendências de intervenções práticas nos desafios clínicos. O evento vai contar com palestrantes nacionais e internacionais da Psicologia.
              </p>

              <p>
                A nossa programação tem objetivo de promover um dia repleto de conhecimentos para o aperfeiçoamento da prática clínica nas intervenções em psicoterapia.
              </p>

              <p>
                A Associação de Terapias Cognitivas de Santa Catarina (ATC-SC) é uma associação estadual dos profissionais e estudantes que se dedicam ao estudo e à prática das diferentes abordagens das Terapias Cognitivas em SC e está sempre buscando trazer as melhores informações existentes sobre saúde mental.
              </p>

              <p>
                A I Jornada Internacional de Terapias Cognitivo-Comportamentais de Santa Catarina: Tendências de Intervenções Práticas nos Desafios Clínicos acontecerá em Itajaí no hotel Sandri no dia 27 de outubro de 2023.
              </p>

              <p>
                Estamos empolgados em receber você para este grande evento! Compre seu ingresso através do link, as vagas são limitadas!
              </p>

              <Button>
                <a href="https://www.sympla.com.br/evento/i-jornada-internacional-de-terapias-cognitivo-comportamentais-de-santa-catarina/2152656?_gl=1*p0cwtm*_ga*MjAzNjMyNTI2OC4xNjg3Mzc2OTIw*_ga_KXH10SQTZF*MTY5NTEyNjY1Ny40My4xLjE2OTUxMjY2OTMuMC4wLjA." target="_blank" rel="noreferrer">
                  Inscreva-se
                </a>
              </Button>

            </Paragrafo>


          </Card>


        </Container>
      </Section>
    </>
  )
}
