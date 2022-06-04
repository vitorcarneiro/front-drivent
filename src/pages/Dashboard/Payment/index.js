/* eslint-disable indent */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useHotelsStatus from '../../../hooks/api/useHotelsStatus';
import ModalityCard from './ModalityCard';
import HotelCard from './HotelCard';
import { toast } from 'react-toastify';
import * as paymentApi from '../../../services/paymentApi';
import { Container, TitlePage, Content, NotEnrolled, SessionTitle, CardsContainer, BookingButton } from './style';
import useToken from '../../../hooks/useToken';

export default function Payment() {
  const { enrollmentError } = useEnrollment();
  const { hotelsStatus } = useHotelsStatus();
  const ticketData = JSON.parse(localStorage.getItem('ticketData'));
  const [modality, setModality] = useState({
    modalitySelected: ticketData?.modalitySelected,
    modalityPrice: ticketData?.modalityPrice,
  });
  const [modalitySelected, setModalitySelected] = useState(null);
  const [hotel, setHotel] = useState(ticketData?.hotelSelected);
  const [hotelSelected, setHotelSelected] = useState(null);
  const [total, setTotal] = useState(null);
  const [hotelsDisabled, setHotelsDisabled] = useState(false);
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = useToken();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      handleReservation();
    }, 500);
  }, []);

  useEffect(() => {
    if (hotelsStatus) {
      const eventMaxCapacity = hotelsStatus.reduce((acc, hotel) => {
        return acc + hotel.capacity;
      }, 0);
      const reservationsDone = hotelsStatus.reduce((acc, hotel) => {
        return acc + hotel.reservations;
      }, 0);
      const reservationsLeft = eventMaxCapacity - reservationsDone;

      if (reservationsLeft <= 0) setHotelsDisabled(true);
    }
  }, [hotelsStatus]);

  useEffect(() => {
    if (total === null) {
      setTotal(ticketData?.total);
    } else {
      setTotal(hotelSelected?.hotelPrice + modality?.modalityPrice);
    }
  }, [hotelSelected]);

  async function handleReservation() {
    try {
      const response = await paymentApi.getRervationById(token);

      if (response && ticketData) {
        return navigate('/dashboard/checkout');
      }
    } catch (error) {
      toast('Ocorreu um erro ao tentar buscar sua reserva, caso não tenha feito ainda efetue os procedimentos!');
    }
  }

  function handleModality(modalityType) {
    setChange(true);
    setModality(modalityType);
  }

  function handleHotel(hotelType) {
    setChange(true);
    setHotel(hotelType);
  }

  function handleBooking() {
    const ticket = {
      modalitySelected: !modalitySelected ? modality.modalitySelected : modalitySelected?.modalityTitle,
      modalityPrice: !modalitySelected?.modalityPrice ? modality.modalityPrice : modalitySelected?.modalityPrice,
      hotelSelected: hotel ? hotel : hotelSelected ? hotelSelected?.hotelTitle : null,
      hotelPrice: hotelSelected?.hotelPrice,
      total: hotelSelected
        ? !modalitySelected?.modalityPrice
          ? modality.modalityPrice + hotelSelected?.hotelPrice
          : modalitySelected?.modalityPrice + hotelSelected?.hotelPrice
        : !modalitySelected?.modalityPrice
        ? modality.modalityPrice
        : modalitySelected?.modalityPrice,
    };

    if (!localStorage.getItem('ticketData')) {
      localStorage.setItem('ticketData', JSON.stringify(ticket));
    } else {
      if (change) {
        localStorage.removeItem('ticketData');
        localStorage.setItem('ticketData', JSON.stringify(ticket));
      }
    }

    navigate('/dashboard/checkout');
  }

  if (loading) return 'Carregando...';

  return (
    <Container>
      <TitlePage>Ingresso e pagamento</TitlePage>

      {enrollmentError?.response.status === 404 ? (
        <Content>
          <NotEnrolled>
            Você precisa completar sua inscrição antes <br />
            de prosseguir pra escolha de ingresso
          </NotEnrolled>
        </Content>
      ) : (
        <>
          <SessionTitle>Primeiro, escolha sua modalidade de ingresso</SessionTitle>

          <CardsContainer>
            <ModalityCard
              handleModality={handleModality}
              handleHotel={handleHotel}
              setModalitySelected={setModalitySelected}
              setHotelSelected={setHotelSelected}
              modality={modality?.modalitySelected}
              title={'Presencial'}
              price={'250'}
            />

            <ModalityCard
              handleModality={handleModality}
              handleHotel={handleHotel}
              setModalitySelected={setModalitySelected}
              setHotelSelected={setHotelSelected}
              modality={modality?.modalitySelected}
              title={'Online'}
              price={'100'}
            />
          </CardsContainer>

          {modality?.modalitySelected === 'Presencial' ? (
            <>
              <SessionTitle>Ótimo! Agora escolha sua modalidade de hospedagem</SessionTitle>

              <CardsContainer>
                <HotelCard
                  handleHotel={handleHotel}
                  setHotelSelected={setHotelSelected}
                  hotel={hotel}
                  title={'Sem Hotel'}
                  price={'0'}
                />

                <HotelCard
                  handleHotel={handleHotel}
                  setHotelSelected={setHotelSelected}
                  hotel={hotel}
                  title={'Com Hotel'}
                  price={'350'}
                  disabled={hotelsDisabled}
                />
              </CardsContainer>

              {hotel && (
                <>
                  <SessionTitle>
                    Fechado! O total ficou em <strong>R$ {`${total}`}</strong>. Agora é só confirmar:
                  </SessionTitle>

                  <BookingButton onClick={() => handleBooking()}>RESERVAR INGRESSO</BookingButton>
                </>
              )}
            </>
          ) : (
            <>
              {modality?.modalitySelected === 'Online' && (
                <>
                  <SessionTitle>
                    Fechado! O total ficou em <strong>R$ 100</strong>. Agora é só confirmar:
                  </SessionTitle>

                  <BookingButton onClick={() => handleBooking()}>RESERVAR INGRESSO</BookingButton>
                </>
              )}
            </>
          )}
        </>
      )}
    </Container>
  );
}
