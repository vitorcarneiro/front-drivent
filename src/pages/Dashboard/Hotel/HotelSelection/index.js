/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable indent */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useHotels from '../../../../hooks/api/useHotels';
import ModalityCard from '../../Payment/ModalityCard';
import HotelCard from '../../Payment/HotelCard';
import { toast } from 'react-toastify';
import { Container, TitlePage, Content, NotEnrolled, SessionTitle, CardsContainer, BookingButton } from '../../Payment/style';
import Card from '../Card';

export default function HotelSelection() {
  const [hotelsToSelect, setHotelsToSelect] = useState([]);
  const navigate = useNavigate();

  const { hotels, hotelsError } = useHotels();

  useEffect(() => {
    if (hotels) {
      if (hotelsError?.error || hotels.length === 0) {
        toast('Ocorreu um erro ao tentar buscar os hotéis disponíveis!');
      }

      console.log(hotels);
      setHotelsToSelect(hotels);
    }
  }, [hotels]);
  
  return (
    <Container>
      <SessionTitle>Primeiro, escolha seu hotel</SessionTitle>

      <CardsContainer>
    
        {hotelsToSelect.map(
          (hotel) =>
            <Card
              name={hotel.name}
              capacity={hotel.capacity}
              reservations={hotel.reservations}
              accommodationTypes={hotel.accommodationTypes}
            />
        )}
        
      </CardsContainer>

    </Container>
  );
}
