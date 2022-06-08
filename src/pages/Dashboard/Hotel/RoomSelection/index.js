import styled from 'styled-components';
import { BsFillPersonFill, BsPerson } from 'react-icons/bs';

export default function RoomSelection() {
  return (
    <RoomContainer>
      <RoomContent>
        <RoomCode>101</RoomCode>

        <RoomVacancy>
          <BsFillPersonFill
            size={25}
          />
          <BsPerson
            size={25}

          />
          <BsPerson
            size={25}

          />
        </RoomVacancy>
      </RoomContent>
     
    </RoomContainer>
  );
}

const RoomContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0;

  gap: 10px;
`;

const RoomContent = styled.div`
  width: 190px;
  height: 45px;

  border: 1px solid #CECECE;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 16px;
`;

const RoomCode = styled.p`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: #454545;
`;

const RoomVacancy = styled.div`

`;

