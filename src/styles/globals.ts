import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  body {
    min-height: 100dvh;
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background:
      radial-gradient(circle at 10% 0%, rgba(161, 98, 7, 0.08), transparent 30%),
      radial-gradient(circle at 90% 10%, rgba(28, 25, 23, 0.07), transparent 34%),
      ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    text-wrap: balance;
  }

  a {
    color: inherit;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.accent};
    color: #fff;
  }

  #root {
    isolation: isolate;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
