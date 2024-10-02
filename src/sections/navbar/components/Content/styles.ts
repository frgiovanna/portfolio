import styled from '@emotion/styled';

export const SectionsWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const Hider = styled.div`
  div {
    display: none;
  }
  button {
    display: flex;
  }

  @media (min-width: 1024px) {
    div {
      display: flex;
    }
    button {
      display: none;
    }
  }
`;
