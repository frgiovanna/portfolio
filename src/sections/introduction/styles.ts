import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 56px;
`;

export const Image = styled.img`
  display: none;
  @media (min-width: 1024px) {
    display: block;

    width: 456px;
    padding-right: 40px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 1024px) {
    gap: 64px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
