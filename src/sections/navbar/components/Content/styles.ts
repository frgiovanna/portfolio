import styled from '@emotion/styled';

export const SectionsWrapper = styled.div`
  display: flex;
  gap: 18px;

  @media (min-width: 1200px) {
    gap: 24px;
  }
`;

export const Hider = styled.div`
  > div {
    display: none;
  }

  > button,
  > .MuiButtonBase-root {
    display: flex;
  }

  @media (min-width: 1024px) {
    > div {
      display: flex;
    }

    > button,
    > .MuiButtonBase-root {
      display: none;
    }
  }
`;
