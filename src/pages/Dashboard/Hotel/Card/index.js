import { HotelCard, HotelTitle, HotelSubTitle, HotelInfo, HotelImage } from '../../../../components/Card/style';

export default function Card({
  id,
  name,
  capacity,
  reservations,
  accommodationTypes,
  imageUrl,
  hotelSelected,
  setHotelSelected,
}) {
  const defaultHotelUrl = 'https://ftnnews.com/images/stories/hotels/Hotel-construction.jpg';

  function handleSelection(id) {
    if (hotelSelected === id) 
      return setHotelSelected(null);
    
    setHotelSelected(id);
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
    <HotelCard isSelected={id === hotelSelected} onClick={() => handleSelection(id)}>
    
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
