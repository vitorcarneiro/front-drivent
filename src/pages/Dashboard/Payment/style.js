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

const NotEnrolled = styled.p`
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

const SessionTitle = styled.h3`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #8e8e8e;

  margin-top: 37px;

  @media screen and (max-width: 650px) {
    font-size: 18px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  width: 100%;

  margin-top: 17px;
`;

const BookingButton = styled.button`
  background-color: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  width: 162px;
  height: 37px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  margin-top: 17px;

  cursor: pointer;
`;

export { Container, TitlePage, Content, NotEnrolled, SessionTitle, CardsContainer, BookingButton };
