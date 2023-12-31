import {createGlobalStyle} from "styled-components";
import {Myvariables} from "./Theme.styled";




 export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }
  
  body{
   
   background-color: ${Myvariables.colors.white};
  }

  button{
   font-family: 'Inter', sans-serif;
   font-size: 10px;
   font-weight: 700;
   line-height: 20px;
   letter-spacing: 0em;
   

  }
    
`