import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { colors, fontFamily, letterSpacing, rem } from "../styles";

const GRAVATAR_URL =
  "https://avatars1.githubusercontent.com/u/4185382?s=460&v=4";

const PeachyPinkFilter = () => (
  <Svg>
    <filter id="peachyPink">
      <feColorMatrix
        type="matrix"
        result="grayscale"
        values={`0.5 0 0 0 0
                 1 0 0 0 0
                 0 0 0 0 0
                 0 0 0 1 0`}
      />
      <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
        <feFuncR type="table" tableValues={`${80 / 255} 1`} />
        <feFuncG type="table" tableValues={`${39 / 255} 0.25`} />
        <feFuncB type="table" tableValues={`${151 / 255} 0.75`} />
        <feFuncA type="table" tableValues="0 1" />
      </feComponentTransfer>
    </filter>
    <filter id="red">
      <feColorMatrix
        type="matrix"
        values="0.83984375 0 0 0 0.09765625 -0.08984375 0 0 0 0.14453125 -0.1328125 0 0 0 0.3125 0 0 0 1 0"
      />
    </filter>
  </Svg>
);

const Svg = styled.svg`
  height: 0;
  left: -9999px;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 0;
`;

const IndexPage = () => {
  return (
    <Container>
      <PeachyPinkFilter />
      <ProfilePicContainer>
        <ProfilePic src={GRAVATAR_URL} alt="Brian Han" />
      </ProfilePicContainer>
      <Name>Brian Han</Name>
      <BlurbContainer>
        <Blurb>
          I'm a <GoldText>front-end developer</GoldText> doing dev things as the
          world ends. No big deal. I'll just be here making some internet for
          the man.
        </Blurb>
      </BlurbContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  padding-top: 1rem;
  height: 100vh;
`;

const ProfilePicContainer = styled.div`
  /* position: absolute; */
  /* z-index: -1; */
  /* width: 100%; */
  width: ${rem(225)};
  clip-path: circle(40% at 47% 46%);
  margin-left: ${rem(15)};
  /* outline: 1px solid red; */
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  filter: url("#peachyPink") hue-rotate(-5deg);
  width: 100%;
`;

const Name = styled.h1`
  color: ${colors.white.hex};
  color: turquoise;
  font-size: ${rem(40)};
  ${fontFamily.ibm};
  line-height: 1;
  margin-top: -10px;
  margin-bottom: ${rem(20)};
  /* font-family: "Open Sans", sans-serif; */
  letter-spacing: -1px;
`;

const BlurbContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* width: ${rem(250)}; */
  line-height: 1.25;
  padding-left: ${rem(35.5)};
  width: 300px;
  /* outline: 1px solid red; */
`;

const Blurb = styled.p`
  color: ${colors.white.hex};
  font-size: ${rem(20)};
  text-align: left;
  ${fontFamily.ibm};
  font-weight: 700;
  letter-spacing: -1px;
`;

const GoldText = styled.span`
  color: gold;
`;

export default IndexPage;
