import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TitlePage = styled.h1`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;

  color: #000000;
`;

const Content = styled.div`
  width: 100%;
  height: 95%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotPaid = styled.p`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #8e8e8e;

  @media screen and (max-width: 650px) {
    font-size: 19px;
  }
`;

export { Container, TitlePage, Content, NotPaid };
