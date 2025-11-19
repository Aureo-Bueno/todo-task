import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  /* 1. Box-sizing reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* 2. Remove default margins and padding */
  * {
    margin: 0;
    padding: 0;
  }

  /* 3. Set core body defaults */
  body {
    min-height: 100vh;
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background-color: ${({ theme }) => theme.colors.neutral.dark};
    color: ${({ theme }) => theme.colors.neutral.text};
  }

  /* 4. Reset headings */
  h1, h2, h3, h4, h5, h6 {
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    text-wrap: balance;
  }

  /* 5. Reset list styles */
  ul[role='list'], ol[role='list'] {
    list-style: none;
  }

  /* 6. Reset links */
  a:not([class]) {
    text-decoration-skip-ink: auto;
    color: currentColor;
  }

  /* 7. Media elements */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* 8. Form elements */
  input, button, textarea, select {
    font: inherit;
  }

  textarea:not([rows]) {
    min-height: 10em;
  }

  /* 9. Accessibility - focus management */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.info};
    outline-offset: 2px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  /* 10. HTML5 display roles */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  /* 11. Table styles */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* 12. Scroll margin for anchors */
  :target {
    scroll-margin-block: 5ex;
  }

  /* 13. Root stacking context (para React apps) */
  #root {
    isolation: isolate;
  }
`;

export default GlobalStyle;
