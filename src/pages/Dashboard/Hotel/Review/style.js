import styled from 'styled-components';

export const SessionTitle = styled.h3`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #8e8e8e;

  margin: 27px 0 15px;

  @media screen and (max-width: 650px) {
    font-size: 18px;
  }
`;

export const TitlePage = styled.h1`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;

  color: #000000;
`;
export const ChangeRoomButton = styled.button`
  width: 182px;
  height: 37px;

  border: none;
  margin-top: 50px;
  cursor: pointer;

  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  margin-bottom: 50px;
`;
