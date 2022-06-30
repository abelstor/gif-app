import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

html, body {
    background-color: #23242a;
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;

    @media (min-width: 768px) {
        padding: 25px 75px;
    }
}
`