import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '../../theme';

interface WrapperProps {
  background: keyof typeof theme.colors;
}

const sectionBackground = {
  cloud: css`
    background: ${theme.gradients.cloud};
  `,
  dawn: css`
    background: ${theme.gradients.dawn};
  `,
  evening: css`
    background: ${theme.gradients.evening};
  `,
  fog: css`
    background: ${theme.gradients.fog};
  `,
  misty: css`
    background: ${theme.gradients.misty};
  `,
  morning: css`
    background: ${theme.gradients.morning};
  `,
  night: css`
    background: ${theme.gradients.night};
  `,
  midnight: css`
    background: ${theme.gradients.night};
  `,
  sky: css`
    background: ${theme.gradients.sky};
  `,
  twilight: css`
    background: ${theme.gradients.twilight};
  `,
  light: css`
    background: ${theme.gradients.light};
  `,
};

export const Wrapper = styled.section<WrapperProps>`
  position: relative;
  overflow: hidden;
  padding: 48px 0;
  ${({ background }) => sectionBackground[background]};

  > .MuiContainer-root {
    position: relative;
    z-index: 1;
  }

  @media (min-width: 1024px) {
    padding: 70px 0;
  }

  &[id='introduction'] {
    background:
      ${theme.gradients.sectionIntroduction},
      ${theme.colors.morning};
    padding: 0 0 40px;

    @media (min-width: 1024px) {
      padding: 34px 0 48px;
    }
  }

  &[id='find-me'] {
    background:
      ${theme.gradients.sectionFindMe},
      ${theme.colors.sky};
  }

  &[id='interests'] {
    background:
      ${theme.gradients.sectionInterests},
      ${theme.colors.fog};
  }

  &[id='skills'] {
    background:
      ${theme.gradients.sectionSkills},
      ${theme.colors.morning};
  }

  &[id='contact'] {
    background:
      ${theme.gradients.sectionContact},
      ${theme.colors.cloud};
  }
`;
