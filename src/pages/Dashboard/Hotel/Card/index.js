import { HotelCard, CardTitle, CardPrice, HotelTitle, HotelSubTitle, HotelInfo, HotelImage } from '../../../../components/Card/style';

export default function Card({
  name,
  capacity,
  reservations,
  accommodationTypes,
  imageUrl,
  setModalitySelected,
  setHotelSelected,
  handleHotel,
  modality,
}) {
  const defaultHotelUrl = 'https://ftnnews.com/images/stories/hotels/Hotel-construction.jpg';

  function handleIsSelected(name) {
    handleHotel(null);
    setHotelSelected(null);
  }
    
  function handleAccommodationTypes() {
    const accommodations = [];
    if (accommodationTypes.length === 0)
      accommodations.push('Sem acomodações');

    for (let i = 0; i < accommodationTypes.length; i++) {
      if (i === accommodationTypes.length - 1 && accommodationTypes.length !== 1) 
        accommodations.push(' e ');
                  
      else if (i !== 0)
        accommodations.push(', ');
          
      accommodations.push(accommodationTypes[i]);
    }
      
    return accommodations;
  }

  return (
    <HotelCard isSelected={name === modality} onClick={() => console.log(name)}>
    
      <HotelImage alt={name} src={imageUrl ? imageUrl : defaultHotelUrl}/>

      <HotelTitle>{name}</HotelTitle>

      <HotelSubTitle>
              Tipos de acomodação
        <HotelInfo>{handleAccommodationTypes()}</HotelInfo>
      </HotelSubTitle>

      <HotelSubTitle>
              Vagas disponíveis
        <HotelInfo>{capacity - reservations}</HotelInfo>
      </HotelSubTitle>
          
    </HotelCard>
  );
}
