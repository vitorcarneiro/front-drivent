import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`;

export const TitlePage = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #000000;
`;

export const SubTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8E8E8E;
  margin-top: 27px;
`;

export const TicketOverview = styled.div`
  width: 290px;
  height: 108px;
  background: #FFEED2;
  border-radius: 20px;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: normal;
  color: #454545;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  p{
    font-weight: 400;
    font-size: 14px;
    color: #898989;
    margin-top: 7px;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 182px;
  height: 37px;
  margin-right: 20px;

  background: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  font-size: 14px;
  line-height: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 870px) {
    margin-bottom: 20px;
    font-size: 12px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const CardForms = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  p{
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;

    color: #8E8E8E;
  }
  input{
    width: 350px;
    height: 45px;
    border-radius: 6px;
    border: 1px solid #8E8E8E;
    padding-left: 6px;
    font-size: 18px;
    text-transform: uppercase;
    &::placeholder{
      text-transform: lowercase;
    }
  }
  form{
    margin-left: 40px;

    @media screen and (max-width: 870px) {
      margin-left: 0;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
    }
    div{
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 870px) {
    flex-direction: column;
  }
`;

export const SmallInput = styled.div`
  display: flex;
  input:first-child{
    width: 230px;
    margin-right: 20px;
  }
  input:last-child{
    width: 100px;
  }
`;
export const Card = styled.div`
  @media screen and (max-width: 870px) {
    width: 100px;
  }
`;
