import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import InputMask from 'react-input-mask';
import { CardForms, SmallInput, Card } from '../style';

export default function CreditCardForm({ cardNumber, name, expiry, cvc, setCardNumber, setName, setExpiry, setCvc }) {
  const [focus, setFocus] = useState('');
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

    </>

  );
}
