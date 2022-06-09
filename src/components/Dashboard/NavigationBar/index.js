import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FaFileContract, FaMoneyBill, FaBed, FaCalendarWeek, FaCertificate } from 'react-icons/fa';
import NavigationButton from './NavigationButton';
import useToken from '../../../hooks/useToken';
import ReloadContext from '../../../contexts/reloadContext';
import * as paymentApi from '../../../services/paymentApi';

export default function NavigationBar() {
  const location = useLocation();
  const [test, setTest] = useState('/dashboard/payment');
  const [loading, setLoading] = useState(false);
  const token = useToken();
  const { reload } = useContext(ReloadContext);
  function isActive(buttonPath) {
    return location.pathname === buttonPath;
  }
  useEffect(() => {
    setLoading(true);
    paymentApi.getReservationById(token).then((answer) => {
      if (answer !== '') {
        setTest('/dashboard/checkout');
        setLoading(false);
      } else {
        setTest('/dashboard/payment');
        setLoading(false);
      }
    });
  }, [reload]);

  return (
    <Container loading={loading.toString()}>
      <Link to="/dashboard/subscription">
        <NavigationButton active={isActive('/dashboard/subscription')}>
          <FaFileContract />
          <span>Inscrição</span>
        </NavigationButton>
      </Link>

      <Link to={test}>
        <NavigationButton active={isActive('/dashboard/payment')}>
          <FaMoneyBill />
          <span>Pagamento</span>
        </NavigationButton>
      </Link>

      <Link to="/dashboard/hotel">
        <NavigationButton active={isActive('/dashboard/hotel')}>
          <FaBed />
          <span>Hotel</span>
        </NavigationButton>
      </Link>

      <Link to="/dashboard/activities">
        <NavigationButton active={isActive('/dashboard/activities')}>
          <FaCalendarWeek />
          <span>Atividades</span>
        </NavigationButton>
      </Link>

      <Link to="/dashboard/certificate">
        <NavigationButton active={isActive('/dashboard/certificate')}>
          <FaCertificate />
          <span>Certificado</span>
        </NavigationButton>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ddd;
  box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.1);
  width: 100px;
  flex-shrink: 0;
  justify-content: flex-start;
  
  > a {
    text-decoration: none;
    ${(props) => (!props.loading && 'pointer-events: none;')}
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 80px;
    flex-direction: row;
  }
`;
