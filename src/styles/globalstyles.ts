import { createGlobalStyle } from 'styled-components';

import pixelToRem from "../utils/pxToRem";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  font: 400 1rem var(--body-font);
  color: var(--text-color);
  background-color: var(--body-color);
  -webkit-font-smoothing: antialiased;
}

html {
  scroll-behavior: smooth;
  @media(max-width: 1440px){
      /*font-size: 93.75%; */
    }

  @media(max-width: 375px){
      /*font-size: 87.5%; */
    }
}

/*====  LAYOUT ============================ */
.container {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.grid {
  display: grid;
  gap: 2rem;
}

.section {
  padding: calc(5rem + var(--header-height)) 0;
}

.section .title {
  margin-bottom: 1rem;
}

.section .subtitle {
  font-size: var(--subtitle-font-size);
}

.section header {
  margin-bottom: 4rem;
}

.section header strong {
  color: var(--base-color);
}
  
:root {
--header-height: 4.5rem;

/* colors */
--hue: 122;
/* HSL color mode */
--base-color: hsl(var(--hue) 36% 57%);
--base-color-second: hsl(var(--hue) 65% 88%);
--base-color-alt: hsl(var(--hue) 57% 53%);
--title-color: hsl(var(--hue) 41% 10%);
--text-color: hsl(0 0% 46%);
--text-color-light: hsl(0 0% 98%);
--body-color: hsl(0 0% 98%);

/* fonts */
--title-font-size: 1.875rem;
--subtitle-font-size: 1rem;

--title-font: 'Poppins' , sans-serif;
--body-font: 'DM Sans' , sans-serif;


  
  /* Fonts */
--font-display: 800 ${pixelToRem(62)}/${pixelToRem(96)} "Heebo", sans-serif;
--font-heading-1: 700 ${pixelToRem(32)}/${pixelToRem(
  48
)} "Heebo", sans-serif;
    --font-heading-2: 500 ${pixelToRem(24)}/${pixelToRem(
  32
)} "Heebo", sans-serif;
    --font-heading-3: 400 ${pixelToRem(20)}/${pixelToRem(
  24
)} "Heebo", sans-serif;
--font-mobile-heading-1: 800 ${pixelToRem(36)}/${pixelToRem(
  50
)} "Heebo", sans-serif;
--font-mobile-text-1: 500 ${pixelToRem(14)}/${pixelToRem(
  24
)} "Heebo", sans-serif;
--text-4: 500 ${pixelToRem(18)}/${pixelToRem(32)} "Heebo", sans-serif;
--text-3: 500 ${pixelToRem(18)}/${pixelToRem(24)} "Heebo", sans-serif;
--text-2: 500 ${pixelToRem(14)}/${pixelToRem(20)} "Heebo", sans-serif;
--text-1: 400 ${pixelToRem(16)}/${pixelToRem(24)} "Heebo", sans-serif;
--text-0: 400 ${pixelToRem(14)}/${pixelToRem(24)} "Heebo", sans-serif;
}`;