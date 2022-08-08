import { SectionDefault } from '../0-UtilsComps/0-SectionDefault'
import { ContainerGrid } from '../0-UtilsComps/Containers/ContainerGrid'

import { ContainerParceiros, Pic, Parceiro, Infos } from './styles'

import p1 from '../../images/logosParceiros/sinopsys.png'
import p2 from '../../images/logosParceiros/fbtc.png'
import p3 from '../../images/logosParceiros/modus.jpg'
import p4 from '../../images/logosParceiros/ABEAD.png'
import p5 from '../../images/logosParceiros/artmed.jpg'
import p6 from '../../images/logosParceiros/grupoa.jpg'
import p7 from '../../images/logosParceiros/cefi.jpg'
import p8 from '../../images/logosParceiros/facucefi.jpg'
import p9 from '../../images/logosParceiros/beno.jpg'
import p10 from '../../images/logosParceiros/wai.jpg'
import p11 from '../../images/logosParceiros/elo.jpg'
import p12 from '../../images/logosParceiros/sinteses.jpg'

import { TitleCenter } from '../0-UtilsComps/TitleCenter'

export function ComponenteDoParceiros() {
  return (
    <>
      <SectionDefault>
        <ContainerGrid grid="row" justifyContent="center">
          <TitleCenter title="CONFIRA NOSSOS PARCEIROS" />
          <ContainerParceiros>
            <Parceiro>
              <Pic>
                <img src={p1} />
              </Pic>
              <Infos>
                <a href="https://www.sinopsyseditora.com.br/" target="_blank">
                  Sinopsys Editora
                </a>
                <p>Desconto 10% na compra de livros</p>
              </Infos>
            </Parceiro>

            <Parceiro>
              <Pic>
                <img src={p2} />
              </Pic>
              <Infos>
                <a href="http://fbtc.org.br/" target="_blank">
                  FBTC
                </a>
                <p>Desconto de 50% na Associação</p>
              </Infos>
            </Parceiro>

            <Parceiro>
              <Pic>
                <img src={p3} />
              </Pic>
              <Infos>
                <a href="https://www.moduscognitivo.com/" target="_blank">
                  Modus Cognitivo
                </a>
              </Infos>
            </Parceiro>

            <Parceiro>
              <Pic>
                <img src={p4} />
              </Pic>
              <Infos>
                <a href="http://abead.com.br/" target="_blank">
                  ABEAD
                </a>
              </Infos>
            </Parceiro>

            <Parceiro>
              <Pic>
                <img src={p5} />
              </Pic>
              <Infos>
                <a href="https://maisaedu.com.br/" target="_blank">
                  ArtMed
                </a>
              </Infos>
            </Parceiro>

            <Parceiro>
              <Pic>
                <img src={p6} />
              </Pic>
              <Infos>
                <a href="https://loja.grupoa.com.br/" target="_blank">
                  Grupo A – Educação
                </a>
              </Infos>
            </Parceiro>

            <Parceiro>
              <Pic>
                <img src={p7} />
              </Pic>
              <Infos>
                <a href="https://www.cefipoa.com.br/" target="_blank">
                  CEFI
                </a>
                <p>
                  Desconto de 10% na matrícula de cursos e grupos de estudos de
                  TCC
                </p>
              </Infos>
            </Parceiro>

            <Parceiro>
              <Pic>
                <img src={p8} />
              </Pic>
              <Infos>
                <a href="https://facefi.com.br/" target="_blank">
                  FACEFI Faculdade do CEFI
                </a>
              </Infos>
            </Parceiro>

            <Parceiro>
              <Pic>
                <img src={p9} />
              </Pic>
              <Infos>
                <a href="https://www.cognicci.com.br/" target="_blank">
                  Benomy Silbefarb – Psicologia Clínica e Hipnoterapia
                </a>
              </Infos>
            </Parceiro>

            <Parceiro>
              <Pic>
                <img src={p10} />
              </Pic>
              <Infos>
                <a href="https://www.cefipoa.com.br/" target="_blank">
                  Wainer Psicologia
                </a>
                <p>Desconto de 20% nas matrículas de cursos</p>
              </Infos>
            </Parceiro>
            <Parceiro>
              <Pic>
                <img src={p11} />
              </Pic>
              <Infos>
                <a href="https://www.cefipoa.com.br/" target="_blank">
                  ELO – Psicologia e desenvolvimento
                </a>
                <p>Desconto de 10% na matrícula de cursos</p>
              </Infos>
            </Parceiro>

            <Parceiro>
              <Pic>
                <img src={p12} />
              </Pic>
              <Infos>
                <a href="https://www.cognicci.com.br/" target="_blank">
                  Sínteses
                </a>
              </Infos>
            </Parceiro>
          </ContainerParceiros>
        </ContainerGrid>
      </SectionDefault>
    </>
  )
}
