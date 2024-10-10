import styled from '@emotion/styled';

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;

  #avatar {
    order: 2;
  }
  #sections {
    display: 1;
  }
  #languages {
    order: 3;
  }

  @media (min-width: 1024px) {
    padding: 0;
    #avatar {
      order: 1;
    }
    #sections {
      order: 2;
    }
  }
`;
