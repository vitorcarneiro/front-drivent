import styled from 'styled-components';

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

  border: 1px solid #cecece;
  border-radius: 10px;

  cursor: pointer;

  ${(props) => props.isSelected && 'background-color: #ffeed2;'};
  ${(props) => props.isFull && 'background-color: #e9e9e9; pointer-events: none'};

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

const ConfirmButton = styled.button`
  width: 182px;
  height: 37px;

  border: none;

  cursor: pointer;

  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  margin-bottom: 50px;
`;

export { RoomContainer, RoomContent, RoomCode, ConfirmButton };
