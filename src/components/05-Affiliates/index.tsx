import { 
  SectionAffiliates,
  ContainerTitle,
  DivText,
  Cards,
  Card
  
 } from './styles';
import pixelToRem from '../../utils/pxToRem';
import { Divider2 } from '../Dividers/styles';
import Button from '../03-Button';

export function Affiliates() {
  return (
    <>
    <Divider2 />
      <SectionAffiliates margin={pixelToRem(0, 150)}>
        <ContainerTitle>

          <DivText>
            <h2>
              ASSOCIE-SE À ATC-SC EM 2022
            </h2>
            <p>
            Podem associar-se à Associação de Terapias Cognitivas do Estado de Santa Catarina os(as) Psicólogos(as), Psiquiatras e estudantes das graduações de Psicologia e Medicina, com domicílio ou atuação no Estado de Santa Catarina. Vantagens em associar-se à ATC/SC:
            </p>
          </DivText>

          <Cards>
            <Card>
              <h3>
                Vantagens de ser associado:
              </h3>
              <ul>
                <li>- Descontos nos eventos organizados ou apoiados pela ATC/SC</li>
                <li>- Acesso às seções do website exclusivas para sócios</li>
                <li>- Possibilidade de participação em cursos e eventos oferecidos ou apoiados pela ATC/SC</li>
              </ul>
            </Card>

            <Card>
              <h3>
              Valor da associação por categoria:  
              </h3>
              <ul>
                <li>- Profissional R$ 90,00</li>
                <li>- Estudante de Pós-Graduação R$ 70,00</li>
                <li>- Estudante de Graduação R$ 50,00</li>
              </ul>
              <Button text='ASSOCIAR-SE' />
            </Card>

            <Card>
              <h3>
                Vantagens de ser associado:
              </h3>
              <ul>
                <li>- Fazer parte da nossa lista de Associados neste nosso site</li>
                <li>- Fazer parte de uma comunidade que troca informações e está em constante atualização</li>
                <li>- Ter a oportunidade de tirar dúvidas com especialistas</li>
              </ul>
            </Card>
          </Cards>
          
        </ContainerTitle>
      </SectionAffiliates>
    </>
  );
}
