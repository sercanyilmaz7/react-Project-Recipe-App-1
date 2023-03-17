import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin:0;
    font-family: 'Girassol',cursive;
  }
  body{
    font-size: 1.5rem;
    background: ${({theme})=>theme.colors.mainColor};
  }

`;


//? Approuterı THEMEPROVIDER ıle sarmalladıgımız ıcın ve theme={theme } propsunu gönderdiğmiiz için burada background da themee propsunu yakalayıp içindekileri kullanıyoruz....
