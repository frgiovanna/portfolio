import styled from '@emotion/styled';

export const Hider = styled.div`
  h1 {
    display: block;
  }
  img {
    display: none;
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

export const Image = styled.img`
  width: 48px;
  border-radius: 999px;
  filter: drop-shadow(0 8px 18px rgba(16, 55, 94, 0.16));
  transition: transform 220ms ease;

  &:hover {
    transform: rotate(-4deg) scale(1.04);
  }
`;
