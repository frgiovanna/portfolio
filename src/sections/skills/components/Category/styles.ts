import styled from '@emotion/styled';
import { theme } from '@shared/theme';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
  border-radius: ${theme.radii.xl};
  background: ${theme.surfaces.cloud};
  box-shadow: ${theme.insetShadows.cloudStrong};
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (min-width: 1024px) {
    gap: 24px;
  }

  > * {
    border-color: ${theme.colors.morning};
  }
`;
