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

export { Card, CardTitle, CardPrice };
