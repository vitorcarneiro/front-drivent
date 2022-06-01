import { Card, CardTitle, CardPrice, NoHotel } from '../../../../components/Card/style';

export default function HotelCard({ title, price, handleHotel, setHotelSelected, hotel, disabled }) {
  function handleIsSelected(title) {
    if (title === hotel) {
      handleHotel(null);
    } else {
      setHotelSelected({ hotelTitle: title, hotelPrice: parseInt(price) });
      handleHotel(title);
    }
  }

  return (
    <Card
      isSelected={title === hotel}
      onClick={() => handleIsSelected(title)}
      disabled={disabled}
    >
      {disabled ? 
        <NoHotel>Não há hotéis disponíveis para este evento</NoHotel>
        :
        <>
          <CardTitle>{title}</CardTitle>
          
          <CardPrice>{`+ R$ ${price}`}</CardPrice>
        </>
      }
    </Card>
  );
}
