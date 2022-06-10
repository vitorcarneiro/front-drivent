import styled from 'styled-components';

import Container from '../Container';

export const StyledContainer = styled(Container)`
  font-size: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-top: 10px;
`;

export const Label = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 16px;
  margin-bottom: 26px;
  width: 100%;
`;

export const Divider = styled.div`
  background-color: #c4c4c4;
  height: 1px;
  width: 40%;
`;
