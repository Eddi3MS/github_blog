import { createGlobalStyle, keyframes } from "styled-components";
export const GlobalStyle = createGlobalStyle`

:root {
  /* COLORS */
  --brand: #3294F8;
  --title: #E7EDF4;
  --subtitle: #C4D4E3;
  --text: #AFC2D4;
  --span: #7B96B2;
  --label: #3A536B;
  --border: #1C2F41;
  --post: #112131;
  --profile: #0B1B2B;
  --background: #071422;
  --input: #040F1A;

  /* SIZES */
  --size-12: .75rem;
  --size-14: .875rem;
  --size-16: 1rem;
  --size-18: 1.125rem;
  --size-20: 1.25rem;
  --size-24: 1.5rem;
}

*, *::before, *::after {
  margin: 0;
  box-sizing: border-box;
}



body {
  font-family: 'Nunito', sans-serif;
  line-height: 160%;
  min-width: 320px;
  min-height: 100vh;
  background-color: var(--background);
}


::-webkit-scrollbar {
  width: 8px;
}


::-webkit-scrollbar-track {
  background: var(--border);
}


::-webkit-scrollbar-thumb {
  background:var(--label);
}


::-webkit-scrollbar-thumb:hover {
  background: var(--post);
}

`;

export const fadeIn = keyframes`
0% { opacity: 0; transform: translateY(-20px) }
100% { opacity: 1; transform: translateY(0) }`;
