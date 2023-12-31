import styled, {css} from "styled-components";
import {Myvariables} from "../styles/Theme.styled";



type StyledButtonPropsType = {
    filled?: boolean;
    unfilled?: boolean;
}
export const StyledButton = styled.button<StyledButtonPropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    
    
    ${props => props.filled && css<StyledButtonPropsType>`
        
        background-color:${Myvariables.colors.main};
        color:${Myvariables.colors.white};
        border: none;
        font-size: 10px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0em;
        margin: 19px 0px 22px 20px;
        


    `}


    ${props => props.unfilled && css<StyledButtonPropsType>`
        
        background-color:transparent;
        color:${Myvariables.colors.main};
        border: 2px solid ${Myvariables.colors.main};
        font-size: 10px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0em;
        margin: 19px 0px 22px 12px;
        



    `}



  
`