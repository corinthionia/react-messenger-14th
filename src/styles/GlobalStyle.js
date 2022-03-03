import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import "./FontStyle.css";

const GlobalStyle = createGlobalStyle`
${normalize}

html, 
body {
    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

* {
    font-family: 'Pretendard', Arial;
    font-display: fallback;
}

:root {
    --vh: 100%;
}
`;

export default GlobalStyle;
