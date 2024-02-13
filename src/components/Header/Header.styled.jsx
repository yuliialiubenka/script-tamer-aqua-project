import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 7vh;
  margin: 0;
  padding: 8px 20px 0 20px;
  @media screen and (min-width: 768px) {
    padding: 8px 32px 0 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 8px 112px 0 112px;
  }
`;
