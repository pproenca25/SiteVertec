import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
     --primary:rgb(248, 248, 248);
     --secondaryText:#9AA6B2;
     --TextBlack:#001524;
    }
    body{
        
        font-family: 'Dosis';
        background-color: var(--primary);
    }

`

export default Global