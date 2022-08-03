import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';



type Props = {
  isOpen: boolean
}

// FOOTER FULLCONTAINER START //
export const ContainerFooter = styled.footer`
  padding-top: .1rem;
  background: var(--body-color);
  width: 100%;
`;
// FOOTER FULLCONTAINER END //


// FOOTER EMAIL START //
export const Email = styled.div`
  padding: 70px 0 70px 0;
`;

export const ContainerEmail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ContentEmail = styled.div`
  padding: 3.625rem 4rem;
  border-radius: 20px;
  box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);


h4 {
  margin-top: -22px;

  font-size: 24px;
  font-weight: bold;
  color: #01bf71;
  padding-bottom: 12px;
  justify-content: center;
}

p {
  font-size: 14px;
  color: var(--title-color);
  position: relative;
  padding-bottom: 12px;
}
`;

export const FormEmail = styled.form`
  display: flex;
  justify-content: center;
  padding: 6px 10px;
  position: absolute;

  input[type="submit"] {
    border: 0;
    background: none;
    font-size: 16px;
    padding: 0 20px;
    background: #47b2e4;
    color: #fff;
    transition: 0.3s;
    border-radius: 50px;
    box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
  }

  input[type="email"] {
    border: 0;
    transition: 0.3s;
    border-radius: 50px;
    box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
  }

`;



// FOOTER EMAIL END//


// FOOTER LINKS START /
export const FooterLinks = styled.div`
  padding-top: 40px;
  padding-bottom: 20px;
  background: #fff;
  font-family: 'Poppins' , sans-serif;
`;

export const FooterLinksContainer = styled.div`
  padding: 0;
  width: 100%;
  padding-right: 4rem;
  padding-left: 4rem;
  margin-right: auto;
  margin-left: auto;
`;

export const FooterLinksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RowLogo = styled.div`
  margin-bottom: 30px;
  flex: 0 0 auto;
  width: 33.33%;

  h4 {
    font-size: 28px;
    margin:  0 40px 0;
    padding: 2px 0 2px 0;
    line-height: 1;
    text-transform: uppercase;
    font-weight: 600;
    color: #37517e;
  }
`;

export const MenuLinks = styled.ul`
  display: grid;

`;

export const ListMe = styled(LinkR)`
  display: flex;
  justify-content: start;
  font-size: 1rem;
  transition: 0.2s ease-in-out;
  color: black;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const RowLinks = styled.div`
  margin-bottom: 30px;
  flex: 0 0 auto;
  width: 33.33%;

  h4 {
    font-size: 16px;
    font-weight: bold;
    color: #01bf71;
    position: relative;
    padding-bottom: 12px;
  }
`;

export const RowSocial = styled.div`
  margin-bottom: 30px;
  flex: 0 0 auto;
  width: 33.33%;

  h4 {
    font-size: 16px;
    font-weight: bold;
    color: #01bf71;
    position: relative;
    padding-bottom: 12px;
  }
`;

export const SocialLinks = styled.a`
    font-size: 18px;
    display: inline-block;

    color: #fff;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
    
`;
// FOOTER LINKS END//


// FOOTER BOTTOM START //
export const FooterBottom = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  background: var(--base-color);
  width: 100%;
  bottom: 0;
  width: 100%;
  padding-right: 4rem;
  padding-left: 4rem;
  margin-right: auto;
  margin-left: auto;
`;

export const Copyright = styled.div`
  float: left;
  font-family: 'Poppins' , sans-serif;
  color: white;


  span {
    font-style: bold;
    cursor: pointer;
  }
`;
// FOOTER BOTTOM END//

