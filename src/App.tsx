import React from 'react';
import './App.css';
import {StyledButton} from "./components/StyledButton";
import MainImage from "./img1.svg"
import {BoxWrapper} from "./styles/BoxWrapper";
import {BoxContent} from "./styles/BoxContent";
import {BoxImage} from "./styles/BoxImage";
import {BoxButton} from "./styles/BoxButton";
import {BoxBody} from "./styles/BoxBody";
import {StyledTitle} from "./styles/StyledTitle";
import {StyledText} from "./styles/StyledText";
import {StyledLink} from "./styles/StyledLink";


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
                      <StyledButton filled><StyledLink
                          href={'https://education.nationalgeographic.org/resource/desert/'}
                          target={`_blank`}
                      >See
                          more</StyledLink></StyledButton>
                      <StyledButton unfilled>Save</StyledButton>
                  </BoxButton>
              </BoxContent>

          </BoxWrapper>


      </div>
  );
}

export default App;





















