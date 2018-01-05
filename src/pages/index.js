import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { colors, fontFamily, letterSpacing, rem } from "../styles";
import carbon from "../img/carbon.png";

const GRAVATAR_URL =
  "https://avatars1.githubusercontent.com/u/4185382?s=460&v=4";

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
      <Filter />
      <ProfilePicContainer>
        <ProfilePic src={GRAVATAR_URL} alt="Brian Han" />
      </ProfilePicContainer>
      <Name>Brian Han</Name>
      <BlurbContainer>
        <Blurb>
          <GoldText>Front-end developer</GoldText> I use code to build and
          design things for the internet.
        </Blurb>
        <Blurb>
          Previously at IBM making{" "}
          <PinkLink href="http://carbondesignsystem.com/">
            Carbon Design System
          </PinkLink>. Currently at Accenture.
        </Blurb>
        {/* <Blurb>
          <Highlight>IBM</Highlight>: core contributor for{" "}
          <PinkLink href="http://carbondesignsystem.com/">
            Carbon Design System
          </PinkLink>, an award-winning, open-source design system adopted by
          IBM Cloud.
        </Blurb>
        <Blurb>
          Currently at <Highlight>Accenture Interactive</Highlight> in Austin,
          Texas.
        </Blurb> */}
        {/* <Blurb>
          Currently @ Accenture / Fjord in Austin, TX. Former IBMer.
          Contributor and founding team member of Carbon Design System.
        </Blurb> */}
      </BlurbContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 1rem; */
  /* padding-top: 1rem; */
  height: 100vh;
  margin-top: 2rem;
  margin-right: 2rem;
  margin-left: 2rem;
`;

const ProfilePicContainer = styled.div`
  /* position: absolute; */
  /* z-index: -1; */
  /* width: 100%; */
  width: ${rem(200)};
  margin: 1rem 0;
  /* clip-path: circle(40% at 47% 46%); */
  /* margin-left: ${rem(15)}; */
  /* outline: 1px solid red; */
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  filter: url("#profile-filter") hue-rotate(-5deg);
  width: 100%;
`;

const Name = styled.h1`
  color: ${colors.white.hex};
  color: turquoise;
  font-size: ${rem(40)};
  ${fontFamily.ibm};
  line-height: 1;
  margin-top: -10px;
  margin-bottom: ${rem(15)};

  /* font-family: "Open Sans", sans-serif; */
  letter-spacing: -1px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const BlurbContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 1.25;
  /* padding-left: ${rem(35.5)}; */
  width: 75%;
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

// const Highlight = styled.span`
//   color: ${colors.white.hex};
//   /* background-color: turquoise; */
// `;

export default IndexPage;
