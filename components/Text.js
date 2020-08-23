import styled from "styled-components";
const Heading = styled.h1`
  font-size: 2rem;
  line-height: 1.28;
  font-weight: 700;
  color: ${({ dark }) => (dark ? "#102A43" : "#FFF4E5")};
  margin: 0;
  padding: 0;
`;
const P = styled.p`
  font-size: 1.375rem;
  line-height: 1.4l;
  color: ${({ dark }) => (dark ? "#627D98" : "#FFF4E5")};
  margin: 0;
  padding: 0;
`;

const Small = styled.span`
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 600;
  color: ${({ dark }) => (dark ? "#627D98" : "#FFF4E5")};
  margin: 0;
  padding: 0;
`;

const Strong = styled.strong`
  font-size: 1.4rem;
  line-height: 1.4rem;
  color: white;
  margin: 0;
  padding: 0;
`;

export default { P, Heading, Small, Strong };
