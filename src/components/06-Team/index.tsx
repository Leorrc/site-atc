import { SectionDefault } from '../0-UtilsComps/0-SectionDefault'
import { ContainerFlex } from '../0-UtilsComps/Containers/ContainerFlex'
import { Divider2 } from '../0-UtilsComps/Dividers/styles'
import { TitleCenter } from '../0-UtilsComps/TitleCenter'

import { Member, Pic, MemberInfos, Social, ContainerMember } from './styles'

import t1 from '../../images/team/t1.jpg'
import t2 from '../../images/team/t2.jpg'
import t3 from '../../images/team/t3.jpg'
import t4 from '../../images/team/t4.jpg'
import t5 from '../../images/team/t5.jpg'
import t6 from '../../images/team/t6.jpg'
import t7 from '../../images/team/t7.jpg'
import t8 from '../../images/team/t8.jpg'
import t9 from '../../images/team/t9.jpg'
import t10 from '../../images/team/t10.jpg'

import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram
} from 'react-icons/ai'
import { ContainerGrid } from '../0-UtilsComps/Containers/ContainerGrid'

export function Team() {
  return (
    <>
      <Divider2 />
      <SectionDefault backgroundColor="var(--body-color)">
        <ContainerGrid grid="row" justifyContent="center">
          <TitleCenter title="DIRETORIA GESTÃO 2022">
            <p>Veja quem faz parte deste time de profissionais</p>
          </TitleCenter>
          <ContainerMember>
            <Member>
              <Pic>
                <img src={t1} />
              </Pic>
              <MemberInfos>
                <h4>Juliana Vieira Almeida Silva</h4>
                <span>Presidente</span>
                <p>(CRP 12/03297)</p>
                <Social>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                  <a href="">
                    <AiFillFacebook />
                  </a>
                  <a href="">
                    <AiFillInstagram />
                  </a>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                </Social>
              </MemberInfos>
            </Member>
            <Member>
              <Pic>
                <img src={t2} />
              </Pic>
              <MemberInfos>
                <h4>Fábia Farina</h4>
                <span>Vice Presidente</span>
                <p>(CRP 00/00000)</p>
                <Social>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                  <a href="">
                    <AiFillFacebook />
                  </a>
                  <a href="">
                    <AiFillInstagram />
                  </a>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                </Social>
              </MemberInfos>
            </Member>
            <Member>
              <Pic>
                <img src={t3} />
              </Pic>
              <MemberInfos>
                <h4>Júlio Pachalski</h4>
                <span>Vice Presidente</span>
                <p>(CRP 00/00000)</p>
                <Social>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                  <a href="">
                    <AiFillFacebook />
                  </a>
                  <a href="">
                    <AiFillInstagram />
                  </a>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                </Social>
              </MemberInfos>
            </Member>
            <Member>
              <Pic>
                <img src={t4} />
              </Pic>
              <MemberInfos>
                <h4>Rafaela Matavelli</h4>
                <span>Vice Presidente</span>
                <p>(CRP 00/00000)</p>
                <Social>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                  <a href="">
                    <AiFillFacebook />
                  </a>
                  <a href="">
                    <AiFillInstagram />
                  </a>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                </Social>
              </MemberInfos>
            </Member>
            <Member>
              <Pic>
                <img src={t5} />
              </Pic>
              <MemberInfos>
                <h4>Rafaela Matavelli</h4>
                <span>Vice Presidente</span>
                <p>(CRP 00/00000)</p>
                <Social>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                  <a href="">
                    <AiFillFacebook />
                  </a>
                  <a href="">
                    <AiFillInstagram />
                  </a>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                </Social>
              </MemberInfos>
            </Member>
            <Member>
              <Pic>
                <img src={t6} />
              </Pic>
              <MemberInfos>
                <h4>Rafaela Matavelli</h4>
                <span>Vice Presidente</span>
                <p>(CRP 00/00000)</p>
                <Social>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                  <a href="">
                    <AiFillFacebook />
                  </a>
                  <a href="">
                    <AiFillInstagram />
                  </a>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                </Social>
              </MemberInfos>
            </Member>
            <Member>
              <Pic>
                <img src={t7} />
              </Pic>
              <MemberInfos>
                <h4>Rafaela Matavelli</h4>
                <span>Vice Presidente</span>
                <p>(CRP 00/00000)</p>
                <Social>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                  <a href="">
                    <AiFillFacebook />
                  </a>
                  <a href="">
                    <AiFillInstagram />
                  </a>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                </Social>
              </MemberInfos>
            </Member>
            <Member>
              <Pic>
                <img src={t8} />
              </Pic>
              <MemberInfos>
                <h4>Rafaela Matavelli</h4>
                <span>Vice Presidente</span>
                <p>(CRP 00/00000)</p>
                <Social>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                  <a href="">
                    <AiFillFacebook />
                  </a>
                  <a href="">
                    <AiFillInstagram />
                  </a>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                </Social>
              </MemberInfos>
            </Member>
            <Member>
              <Pic>
                <img src={t9} />
              </Pic>
              <MemberInfos>
                <h4>Rafaela Matavelli</h4>
                <span>Vice Presidente</span>
                <p>(CRP 00/00000)</p>
                <Social>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                  <a href="">
                    <AiFillFacebook />
                  </a>
                  <a href="">
                    <AiFillInstagram />
                  </a>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                </Social>
              </MemberInfos>
            </Member>
            <Member>
              <Pic>
                <img src={t10} />
              </Pic>
              <MemberInfos>
                <h4>Rafaela Matavelli</h4>
                <span>Vice Presidente</span>
                <p>(CRP 00/00000)</p>
                <Social>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                  <a href="">
                    <AiFillFacebook />
                  </a>
                  <a href="">
                    <AiFillInstagram />
                  </a>
                  <a href="">
                    <AiFillTwitterCircle />
                  </a>
                </Social>
              </MemberInfos>
            </Member>
          </ContainerMember>
        </ContainerGrid>
      </SectionDefault>
    </>
  )
}
