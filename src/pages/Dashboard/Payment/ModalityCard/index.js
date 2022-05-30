import { Card, CardTitle, CardPrice } from '../../../../components/Card/style';

export default function ModalityCard({
  title,
  price,
  handleModality,
  setModalitySelected,
  setHotelSelected,
  handleHotel,
  modality,
}) {
  function handleIsSelected(title) {
    handleHotel(null);
    setHotelSelected(null);

    if (title === modality) {
      handleModality(null);
    } else {
      setModalitySelected({ modalityTitle: title, modalityPrice: parseInt(price) });
      handleModality({ modalitySelected: title, modalityPrice: parseInt(price) });
    }
  }

  return (
    <Card isSelected={title === modality} onClick={() => handleIsSelected(title)}>
      <CardTitle>{title}</CardTitle>

      <CardPrice>{`R$ ${price}`}</CardPrice>
    </Card>
  );
}
