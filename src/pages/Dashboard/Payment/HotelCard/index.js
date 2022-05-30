import { Card, CardTitle, CardPrice } from '../../../../components/Card/style';

export default function HotelCard({ title, price, handleHotel, setHotelSelected, hotel }) {
  function handleIsSelected(title) {
    if (title === hotel) {
      handleHotel(null);
    } else {
      setHotelSelected({ hotelTitle: title, hotelPrice: parseInt(price) });
      handleHotel(title);
    }
  }

  return (
    <Card isSelected={title === hotel} onClick={() => handleIsSelected(title)}>
      <CardTitle>{title}</CardTitle>

      <CardPrice>{`+ R$ ${price}`}</CardPrice>
    </Card>
  );
}
