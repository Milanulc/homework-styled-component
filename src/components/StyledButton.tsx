import styled, {css} from "styled-components";



type StyledButtonPropsType = {
    filled?: boolean;
    unfilled?: boolean;
}
export const StyledButton = styled.button<StyledButtonPropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    
    
    ${props => props.filled && css<StyledButtonPropsType>`
        
        background-color:#4E71FE;
        color:#FFFFFF;
        
    `}


    ${props => props.unfilled && css<StyledButtonPropsType>`
        
        background-color:#FFFFFF;
        color:#4E71FE;
        border: 2px solid #4E71FE;
        
    `}



  
`