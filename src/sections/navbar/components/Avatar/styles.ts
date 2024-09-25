import styled from "@emotion/styled";

export const Hider = styled.div`
  h1 {
    display: none;
  }
  img {
    display: block;
  }

  @media (min-width: 1024px) {
    h1 {
      display: block;
    }
    img {
      display: none;
    }
  }
`;
