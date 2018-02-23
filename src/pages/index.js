import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { colors, fontFamily, letterSpacing, rem } from "../styles";
import carbon from "../img/carbon.png";

const GRAVATAR_URL =
  "https://avatars1.githubusercontent.com/u/4185382?s=460&v=4";

const Svg = styled.svg`
  height: 0;
  left: -9999px;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 0;
`;

const Filter = () => (
  <Svg>
    <filter id="profile-filter">
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

const IndexPage = () => {
  return (
    <Wrapper>
      <Filter />
      <ProfilePicWrapper>
        <ProfilePic src={GRAVATAR_URL} alt="Brian Han" />
      </ProfilePicWrapper>
      <Name>Brian Han</Name>
      <BlurbWrapper>
        <Blurb>
          <GoldText>Front-end developer</GoldText>
        </Blurb>
        <Blurb>
          Previously at IBM working on{" "}
          <PinkLink href="http://carbondesignsystem.com/">
            Carbon Design System
          </PinkLink>. Currently at Accenture.
        </Blurb>
      </BlurbWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 2rem;
  margin-right: 2rem;
  margin-left: 2rem;
`;

const ProfilePicWrapper = styled.div`
  width: ${rem(200)};
  margin: 1rem 0;
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  filter: url("#profile-filter") hue-rotate(-5deg);
  width: 100%;
`;

const Name = styled.h1`
  color: ${colors.white.hex};
  color: turquoise;
  font-size: ${rem(46)};
  ${fontFamily.ibm};
  line-height: 1;
  margin-top: -10px;
  margin-bottom: ${rem(15)};
  letter-spacing: -1px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 500px) {
    font-size: ${rem(60)};
    letter-spacing: -2px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: ${rem(20)};
  }
`;

const BlurbWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 1.25;
  width: 90%;
`;

const Blurb = styled.p`
  color: ${colors.white.hex};
  font-size: ${rem(18)};
  text-align: left;
  ${fontFamily.ibm};
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0 auto;
  margin-bottom: ${rem(20)};
  letter-spacing: -0.001px;
  width: 195px;

  @media screen and (min-width: 500px) {
    font-size: ${rem(24)};
    width: 250px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: ${rem(40)};
  }
`;

const GoldText = styled.p`
  color: gold;
`;

const PinkLink = styled.a`
  color: ${colors.salmon.hex};
  color: white;
  text-decoration-skip: ink;
  text-decoration-color: ${colors.salmon.hex};
  ${fontFamily.ibm};
`;

export default IndexPage;
