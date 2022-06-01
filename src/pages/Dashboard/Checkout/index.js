import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TitlePage, SubTitle, TicketOverview, Button, ButtonsContainer } from './style';
import 'react-credit-cards/es/styles-compiled.css';
import useToken from '../../../hooks/useToken';
import { toast } from 'react-toastify';
import * as paymentApi from '../../../services/paymentApi';
import CreditCardForm from './creditCardForm';

export default function Checkout() {
  const navigate = useNavigate();
  const ticket = JSON.parse(localStorage.getItem('ticket'));
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [isPayed, setIsPayed] = useState(false);
  const token = useToken();

  function finishPayment() {
    console.log(token);
    if (cardNumber === '' || name === '' || expiry === '' || cvc === '') {
      toast('Preencha todas as informações');
      return;
    }
    //paymentApi.makePayment(token, { total: ticket.total });
    setIsPayed(true);
  }
  return (
    <Container>
      <TitlePage>Ingresso e pagamento</TitlePage>
      <SubTitle>Ingresso escolhido</SubTitle>
      <TicketOverview>
        {ticket.modalitySelected === 'Presencial' ? `Presencial + ${ticket?.hotelSelected}` : 'Online'}
        <p>R$ {ticket.total}</p>
      </TicketOverview>
      <SubTitle>Pagamentos</SubTitle>
      {isPayed ?
        <h1>Pagamento confirmado!</h1>
        :
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
            <Button type="submit" onClick={() => finishPayment()}>FINALIZAR PAGAMENTO</Button>
            <Button onClick={() => navigate(-1)}>VOLTAR</Button>
          </ButtonsContainer>
        </>
      }
    </Container >
  );
}
