const rem = px => `
  ${px / 16}rem;
`;

const fontFamily = {
  ibm: `
    font-family: "IBM Plex Sans", sans-serif;
  `,
  system: `
    font-family: sans-serif;
  `
};

const letterSpacing = `
  letter-spacing: ${rem(-0.5)}
`;

export { fontFamily, letterSpacing, rem };
