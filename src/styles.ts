import { createGlobalStyle } from 'styled-components'

export const Cores = {
  branca: '#EEE',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84'
}
export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

  body {
    background-color: ${Cores.preta};
    color: ${Cores.branca};
}
`
