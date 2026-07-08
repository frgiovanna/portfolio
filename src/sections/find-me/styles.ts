import styled from '@emotion/styled';
import { theme } from '@shared/theme';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: fit-content;
  gap: 14px;
  padding: 18px;
  border-radius: ${theme.radii.xl};
  background: ${theme.surfaces.cloud};
  box-shadow: ${theme.insetShadows.cloudStrong};

  @media (min-width: 1024px) {
    background:
      ${theme.gradients.mediaLinksSurface},
      ${theme.colors.light};
    padding: 24px;
    gap: 24px;
    border-radius: ${theme.radii.xxl};
    margin-top: 0;
    box-shadow: ${theme.shadows.lg};
  }
`;

export const ContentWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1024px) {
    gap: 64px;
    flex: 1;
    margin: 8px 10% 0 0;
  }
`;
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 640px;
  padding: 22px 22px 22px 24px;
  border: ${theme.borders.cloud};
  border-left: ${theme.borders.accentLeft};
  border-radius: 0 ${theme.radii.xl} ${theme.radii.xl} 0;
  background: ${theme.surfaces.cloud};
  box-shadow: ${theme.insetShadows.cloud};
`;
