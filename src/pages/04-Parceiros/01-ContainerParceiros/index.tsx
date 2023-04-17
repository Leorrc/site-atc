import { ContainerGrid } from "../../../components/01-Utils/Containers/ContainerGrid";

import {
  SectionBg,
  Container,
  Pic,
  Parceiro,
  Infos,
  ContainerSection,
  Tittle,
} from "./styles";

import p1 from "../../../images/logos/sino.svg";
import p2 from "../../../images/logos/booktoy.svg";
import p3 from "../../../images/logos/jurua.svg";
import p4 from "../../../images/logos/univali.svg";
import p5 from "../../../images/logos/fbtc.svg";
import p6 from "../../../images/logos/artmed.svg";
import p7 from "../../../images/logos/aa.svg";
import p8 from "../../../images/logos/viver.svg";
import p9 from "../../../images/logos/ictc.svg";
import {
  Divider2,
  Divider3,
} from "../../../components/01-Utils/Dividers/styles";

export function ContainerParceiros() {
  return (
    <>
      <SectionBg />

      <ContainerSection>
        <Tittle>
          <h2>
            CONFIRA NOSSOS PARCEIROS <span>2023</span>
          </h2>
        </Tittle>
        <Divider2 />
        <Container>
          <Parceiro>
            <Pic>
              <img src={p9} />
            </Pic>
            <Infos>
              <a
                href="https://www.facebook.com/ictcflorianopolis"
                target="_blank"
              >
                ICTC - Instituto Catarinense de Terapia Cognitiva
              </a>
              <h4>
                - Associados da ATC SC ganham até 46% de desconto na Pós em TCC
                do ICTC
              </h4>

              <strong>Exclusivo para associados da ATC-SC</strong>
            </Infos>
          </Parceiro>
          <Parceiro>
            <Pic>
              <img src={p8} />
            </Pic>
            <Infos>
              <a
                href="https://www.instagram.com/vivermaispsicologia/"
                target="_blank"
              >
                Viver Mais Psicologia
              </a>
              <h4>
                - Associados da ATC SC ganham 30% nas primeiras 3 mensalidades
                da Pós e/ou Formação em TCC.
              </h4>

              <h4>
                - Alunos da Viver Mais terão desconto na associação, ficando o
                valor de 50,00
              </h4>
            </Infos>
          </Parceiro>
          <Divider3 />
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
          <Divider3 />
          <Parceiro>
            <Pic>
              <img src={p2} />
            </Pic>
            <Infos>
              <a href="https://www.booktoy.com.br/" target="_blank">
                Editora BOOKTOY
              </a>
              <p>Desconto 10% na compra de livros</p>
            </Infos>
          </Parceiro>
          <Divider3 />
          <Parceiro>
            <Pic>
              <img src={p3} />
            </Pic>
            <Infos>
              <a href="https://www.jurua.com.br/" target="_blank">
                Editora JURUÁ
              </a>
              <p>Desconto 20% na compra de livros</p>
            </Infos>
          </Parceiro>
          <Divider3 />
          <Parceiro>
            <Pic>
              <img src={p4} />
            </Pic>
            <Infos>
              <a
                href="https://www.univali.br/imprensa/cursos-de-extensao/Paginas/default.aspx?curso=Curso+de+Formacao+em+Terapia+Cognitivo+Comportamental+(EAD)+%e2%80%93+2%c2%aa+TURMA&n=975"
                target="_blank"
              >
                Univali
              </a>
              <p></p>
            </Infos>
          </Parceiro>
          <Divider3 />
          <Parceiro>
            <Pic>
              <img src={p5} />
            </Pic>
            <Infos>
              <a href="http://fbtc.org.br/" target="_blank">
                FBTC
              </a>
              <p>Desconto de 50% na Associação</p>
            </Infos>
          </Parceiro>
          <Divider3 />
          <Parceiro>
            <Pic>
              <img src={p6} />
            </Pic>
            <Infos>
              <a href="https://maisaedu.com.br/" target="_blank">
                ArtMed
              </a>
              <p> </p>
            </Infos>
          </Parceiro>
          <Divider3 />
          <Parceiro>
            <Pic>
              <img src={p7} />
            </Pic>
            <Infos>
              <a href="https://loja.grupoa.com.br/" target="_blank">
                Grupo A – Educação
              </a>
              <p> </p>
            </Infos>
          </Parceiro>
        </Container>
      </ContainerSection>
    </>
  );
}
