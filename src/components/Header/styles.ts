import styled from 'styled-components';

export const Container = styled.header`
  background: #d73035;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 178px;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;

  img {
    width: 250px;
    height: 100%;
  }

  @media screen and (max-width: 420px) {
    img {
      display: none;
    }
  }
`;

export const PageDetails = styled.div`
  h1 {
    color: #fff;
    font-size: 32px;
    margin-bottom: 6px;
  }

  h2 {
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    opacity: 0.9;
  }
`;
