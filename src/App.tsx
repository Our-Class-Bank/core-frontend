import { ThemeProvider, createGlobalStyle, styled } from "styled-components";
import RoutePage from "@/routes/RoutePage";
import { BrowserRouter } from "react-router-dom";
import Header from "@/pages/layout/Header";
import SideBar from "@/pages/layout/SideBar";
import defaultTheme from "@/style/theme";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-weight: 300;
    font-family: 'Noto Sans', sans-serif;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  button {
    cursor: pointer;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Container>
          <RoutePage />
        </Container>
        <GlobalStyle />
      </BrowserRouter>
      <ReactQueryDevtools />
    </ThemeProvider>
  );
}

export default App;
