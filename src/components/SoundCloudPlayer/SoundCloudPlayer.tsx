import React from 'react';
import styled, { keyframes } from 'styled-components';


const typeWriter = keyframes`
  from {width: 0;}
  to {width: 100%;}
`;
const BandcampPlayerContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 120px;
`;



// @ts-ignore
const BandCampPlayer = ({ url }) => (
    <BandcampPlayerContainer>
        <StyledIframe
            title="Bandcamp Player"
            src={url}
            seamless
        ></StyledIframe>
    </BandcampPlayerContainer>
);

export default BandCampPlayer;
