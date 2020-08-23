import styled from "styled-components";

const Stack = styled.div`
  & > * + * {
    margin-top: ${({ space = 1 }) => space}rem;
  }
`;
export default Stack;
