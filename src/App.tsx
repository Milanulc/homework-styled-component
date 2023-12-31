import React from 'react';
import './App.css';
import {StyledButton} from "./components/StyledButton";
import styled from "styled-components";
import {Myvariables} from "./styles/Theme.styled";
import MainImage from "./img1.svg"


function App() {
  return (
      <div className="App">
          <BoxWrapper>
              <BoxContent>
                  <BoxImage>
                      <img src={MainImage} alt={'Desert'}/>
                  </BoxImage>
                  <BoxBody>
                      <StyledTitle>Headline</StyledTitle>
                      <StyledText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                          Sit molestie ornare in venen.
                      </StyledText>

                  </BoxBody>
                  <BoxButton>
                      <StyledButton filled>See more</StyledButton>
                      <StyledButton unfilled>Save</StyledButton>
                  </BoxButton>
              </BoxContent>

          </BoxWrapper>


      </div>
  );
}

export default App;

const BoxWrapper = styled.div`
    background-color: transparent;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BoxContent = styled.div`
    background-color: ${Myvariables.colors.white};
    width: 300px;
    height: 350px;
    border-radius: 15px;
    box-shadow: 0px 4px 20px 5px ${Myvariables.colors.shadow};
    
    
    
    `

    const BoxImage = styled.div`
    margin: 10px;
        `

    const BoxButton = styled.div`
    `

    const BoxBody = styled.div`
    `
    const StyledTitle = styled.h1`
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        margin: 20px;
        color: #000000;
    ;
        

    `

    const StyledText = styled.p`
        width: 260px;
        height: 40px;
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        color: ${Myvariables.colors.grey };
        margin: 20px 0px 0px 20px;

    `









