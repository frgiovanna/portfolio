import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (min-width: 1024px) {
    gap: 24px;
  }
`;
