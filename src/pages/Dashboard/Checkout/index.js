/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-credit-cards/es/styles-compiled.css';
import useToken from '../../../hooks/useToken';
import { toast } from 'react-toastify';
import * as paymentApi from '../../../services/paymentApi';
import CreditCardForm from './creditCardForm';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import {
  Container,
  TitlePage,
  SubTitle,
  TicketOverview,
  Button,
  ButtonsContainer,
  SubTitleContainer,
  SubTitleMessage,
  SubTitleDescription,
} from './style';

export default function Checkout() {
  const navigate = useNavigate();
  const ticketData = JSON.parse(localStorage.getItem('ticketData'));
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [isPayed, setIsPayed] = useState(false);
  const [reservation, setRervation] = useState(null);
  const token = useToken();

  useEffect(() => {
    handleReservation();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (reservation === '' && !ticketData) {
        navigate('/dashboard/payment');
      }
    }, 500);
  }, [reservation]);

  async function handleReservation() {
    try {
      const response = await paymentApi.getRervationById(token);

      setRervation(response);

      if (response) {
        setIsPayed(true);
      }
    } catch (error) {
      return toast('Ocorreu um erro ao tentar buscar sua reserva, caso não tenha feito ainda efetue os procedimentos!');
    }
  }

  async function finishPayment() {
    let payment;
    if (ticketData.modalitySelected === 'Presencial') {
      payment = {
        hotelPrice: ticketData.hotelPrice,
        hotelSelected: ticketData.hotelSelected,
        modalityPrice: ticketData.modalityPrice,
        modalitySelected: ticketData.modalitySelected,
        total: ticketData.total,
        eventId: 1,
      };
    } else {
      payment = {
        modalityPrice: ticketData.modalityPrice,
        modalitySelected: ticketData.modalitySelected,
        total: ticketData.total,
        eventId: 1,
      };
    }

    if (cardNumber === '' || name === '' || expiry === '' || cvc === '') {
      toast('Preencha todas as informações');
      return;
    }

    try {
      await paymentApi.makePayment(token, payment);

      setIsPayed(true);
    } catch (error) {
      return toast('Ocorreu um erro ao tentar finalizar o seu pagamento!');
    }
  }

  return (
    <Container>
      <TitlePage>Ingresso e pagamento</TitlePage>
      <SubTitle>Ingresso escolhido</SubTitle>
      <TicketOverview>
        {reservation
          ? reservation.Transaction[0].modalitySelected === 'Presencial'
            ? `Presencial + ${reservation.Transaction[0].hotelSelected}`
            : 'Online'
          : ticketData?.modalitySelected === 'Presencial'
          ? `Presencial + ${ticketData?.hotelSelected}`
          : 'Online'}
        <p>R$ {reservation ? reservation.Transaction[0].total : ticketData?.total}</p>
      </TicketOverview>
      <SubTitle>Pagamentos</SubTitle>
      {isPayed ? (
        <SubTitleContainer>
          <BsFillCheckCircleFill size={43} color="#36B853" />

          <div>
            <SubTitleMessage>Pagamento confirmado!</SubTitleMessage>
            <SubTitleDescription>Prossiga para escolha de hospedagem e atividades</SubTitleDescription>
          </div>
        </SubTitleContainer>
      ) : (
        <>
          <CreditCardForm
            cardNumber={cardNumber}
            name={name}
            expiry={expiry}
            cvc={cvc}
            setCardNumber={setCardNumber}
            setName={setName}
            setExpiry={setExpiry}
            setCvc={setCvc}
          />
          <ButtonsContainer>
            <Button type="submit" onClick={() => finishPayment()}>
              FINALIZAR PAGAMENTO
            </Button>
            <Button onClick={() => navigate(-1)}>VOLTAR</Button>
          </ButtonsContainer>
        </>
      )}
    </Container>
  );
}
