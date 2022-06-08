import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const SessionTitle = styled.h3`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #8e8e8e;

  margin-top: 27px;

  @media screen and (max-width: 650px) {
    font-size: 18px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  width: 100%;
  padding-bottom: 15px;

  margin-top: 17px;

  overflow-x: auto;
  white-space: nowrap;
`;

export { Container, SessionTitle, CardsContainer };
