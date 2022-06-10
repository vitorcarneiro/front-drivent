import { useEffect, useState } from 'react';
import useHotels from '../../../../hooks/api/useHotels';
import { toast } from 'react-toastify';
import { Container, SessionTitle, CardsContainer } from './style';
import Card from '../Card';
import RoomSelection from '../RoomSelection';
import { useLocation } from 'react-router-dom';

export default function HotelSelection() {
  const [hotelsToSelect, setHotelsToSelect] = useState([]);
  const [hotelSelected, setHotelSelected] = useState(null);
  const { hotels, hotelsError } = useHotels();
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (hotels) {
      if (hotelsError?.error || hotels.length === 0) {
        toast('Ocorreu um erro ao tentar buscar os hotéis disponíveis!');
      }

      setHotelsToSelect(hotels);
      setHotelSelected(state?.hotelSelected);
    }
  }, [hotels]);

  return (
    <Container>
      <SessionTitle>Primeiro, escolha seu hotel</SessionTitle>

      <CardsContainer>
        {hotelsToSelect.map((hotel) => (
          <Card
            key={hotel.id}
            id={hotel.id}
            name={hotel.name}
            imageUrl={hotel.imageUrl}
            capacity={hotel.capacity}
            reservations={hotel.reservations}
            accommodationTypes={hotel.accommodationTypes}
            hotelSelected={hotelSelected}
            setHotelSelected={setHotelSelected}
          />
        ))}
      </CardsContainer>

      {hotelSelected && (
        <>
          <SessionTitle>Ótima pedida! Agora escolha seu quarto:</SessionTitle>
          <RoomSelection hotelId={hotelSelected} />
        </>
      )}
    </Container>
  );
}
