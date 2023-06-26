import React, { useEffect, useState } from 'react';
import { CookieBannerButton, CookieBannerButton2, CookieBannerDiv, CookieBannerMessage, CookieBannerWrapper, DivIcon } from './styles';
import { MdClose } from 'react-icons/md'
const CookieBanner: React.FC = () => {
  const [consented, setConsented] = useState(false);

  const handleConsent = () => {
    setConsented(true);
    // Armazene as preferências de consentimento do usuário em um cookie
    document.cookie = 'cookieConsented=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
  };

  const handleClose = () => {
    setConsented(true);
  };

  useEffect(() => {
    const hasConsented = document.cookie
      .split('; ')
      .find(row => row.startsWith('cookieConsented='));

    if (hasConsented) {
      setConsented(true);
    }
  }, []);

  if (consented) {
    return null; // O banner não é exibido se o consentimento já foi dado
  }

  return (
    <CookieBannerWrapper>

      <CookieBannerMessage>
        Este site utiliza cookies. Ao continuar navegando, você concorda com o uso de cookies.
      </CookieBannerMessage>

      <CookieBannerDiv>
        <CookieBannerButton onClick={handleConsent}>
          Aceitar
        </CookieBannerButton>
        <CookieBannerButton2 to="/politica-de-privacidade">
          Politica de privacidade
        </CookieBannerButton2>
      </CookieBannerDiv>
      <DivIcon onClick={handleClose}>
        <MdClose />
      </DivIcon>

    </CookieBannerWrapper>
  );
};

export default CookieBanner;
