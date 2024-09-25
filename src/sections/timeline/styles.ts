import styled from '@emotion/styled';
import { theme } from '../../shared/theme';

export const Dot = styled.div`
  border-radius: 50%;
  position: absolute;
  background-color: ${theme.colors.evening};
  width: 24px;
  height: 24px;
`;

export const Connector = styled.div`
  background-color: ${theme.colors.morning};
  width: 24px;
  flex-grow: 1;
`;

export const Hider = styled.div`
  #alternating-timeline {
    display: none;
  }
  #right-timeline {
    display: block;
  }

  @media (min-width: 1024px) {
    #alternating-timeline {
      display: block;
    }
    #right-timeline {
      display: none;
    }
  }
`;
