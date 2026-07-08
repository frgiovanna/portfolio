import styled from '@emotion/styled';
import { theme } from '@shared/theme';

export const Toolbar = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  margin-bottom: 10px;
  padding: 8px 12px;
  border: ${theme.borders.cloudStrong};
  border-radius: ${theme.radii.xl};
  background: ${theme.surfaces.fogGlass};
  backdrop-filter: blur(16px);
  box-shadow: ${theme.shadows.md};

  button {
    width: 44px;
    height: 44px;
    border-radius: 16px;
    background: ${theme.surfaces.cloud};
    transition:
      background-color ${theme.transitions.default},
      transform ${theme.transitions.default};
  }

  button:hover {
    background: ${theme.colors.light};
    transform: translate3d(0, -1px, 0);
  }

  #avatar {
    display: block;
    order: 1;
  }
  #sections {
    order: 2;
  }
  #languages {
    order: 3;
  }

  @media (min-width: 1024px) {
    border-radius: ${theme.radii.xxl};
    padding: 10px 18px;

    button {
      width: 40px;
      height: 40px;
    }

    #avatar {
      order: 1;
    }
    #sections {
      order: 2;
    }
    #languages {
      order: 3;
    }
  }

  @supports not (backdrop-filter: blur(16px)) {
    background: ${theme.colors.fog};
  }
`;
