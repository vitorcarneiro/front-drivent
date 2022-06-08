import styled from 'styled-components';

const Card = styled.div`
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;

  background-color: ${(props) => (props.isSelected ? '#ffeed2' : '#ffffff')};
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  background-color: ${(props) => (props.disabled && '#cecece')};
`;

const CardTitle = styled.h4`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #454545;

  margin-bottom: 3px;
`;

const CardPrice = styled.p`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: #898989;
`;

const NoHotel = styled.div`
  width: 80%;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: #454545;
`;

const HotelCard = styled.div`
  width: 196px;
  height: 264px;
  border-radius: 10px;

  background-color: ${(props) => (props.isSelected ? '#ffeed2' : '#F1F1F1')};
  
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  
  cursor: pointer;
`;

const HotelTitle = styled.h3`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #343434;

  margin-bottom: 3px;
`;

const HotelSubTitle = styled.div`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  color: #3C3C3C;
`;

const HotelInfo = styled.h4`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-top: 2px;

  color: #3C3C3C;
`;

const HotelImage = styled.img`
  width: 100%;
  height: 109px;
  border-radius: 5px;

  object-fit: cover;
`;

export { Card, CardTitle, CardPrice, NoHotel, HotelCard, HotelTitle, HotelSubTitle, HotelInfo, HotelImage };
