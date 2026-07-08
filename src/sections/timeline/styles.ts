import styled from '@emotion/styled';
import { theme } from '@shared/theme';

export const Dot = styled.div`
  border-radius: 50%;
  position: absolute;
  background: ${theme.colors.twilight};
  border: 4px solid ${theme.colors.fog};
  box-shadow: 0 0 0 6px rgba(254, 159, 159, 0.18);
  width: 22px;
  height: 22px;
`;

const BaseConnector = styled.div`
  background: rgba(254, 159, 159, 0.48);
  width: 8px;
  flex-grow: 1;
`;

export const Connector = styled(BaseConnector)`
  border-radius: 0;
`;

export const TimelineStart = styled(BaseConnector)`
  flex: 0 0 18px;
  border-radius: ${theme.radii.pill} ${theme.radii.pill} 0 0;
`;

export const TimelineEnd = styled(BaseConnector)`
  border-radius: 0 0 ${theme.radii.pill} ${theme.radii.pill};
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
