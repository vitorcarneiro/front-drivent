import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TitlePage, SubTitle, TicketOverview, Button, ButtonsContainer, CardForms, SmallInput, Card } from './style';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import InputMask from 'react-input-mask';
import useToken from '../../../hooks/useToken';
import { toast } from 'react-toastify';
import * as paymentApi from '../../../services/paymentApi';

export default function Checkout() {
  const navigate = useNavigate();
  const ticket = JSON.parse(localStorage.getItem('ticket'));
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
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

  function withoutPayment() {
    return (
      <>
        <CardForms>
          <Card id="pagament">
            <Cards
              number={cardNumber}
              name={name}
              expiry={expiry.replaceAll('_', '')}
              cvc={cvc}
              focused={focus}
            />
          </Card>
          <form>
            <div>
              <InputMask
                mask="9999 9999 9999 9999"
                maskChar=" "
                type="tel"
                name="number"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
              <p>E.g.: 49..., 51..., 36..., 37...</p>
            </div>
            <div>
              <InputMask
                mask="a"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </div>
            <SmallInput>
              <InputMask
                mask="99/99"
                name="expiry"
                placeholder="Valid Thru"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
              <InputMask
                mask="999"
                name="cvc"
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </SmallInput>
          </form>
        </CardForms>
        <ButtonsContainer>
          <Button type="submit" onClick={() => finishPayment()}>FINALIZAR PAGAMENTO</Button>
          <Button onClick={() => navigate(-1)}>VOLTAR</Button>
        </ButtonsContainer>
      </>

    );
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
      {isPayed ? <h1>Pagamento confirmado!</h1> : withoutPayment()}
    </Container >
  );
}
