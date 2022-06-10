import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SessionTitle, TitlePage, ChangeRoomButton } from './style';
import * as accommodationApi from '../../../../services/accommodationApi';
import useToken from '../../../../hooks/useToken';
import {
  HotelCard,
  HotelTitle,
  HotelSubTitle,
  HotelInfo,
  HotelImage,
} from '../../../../components/Card/style';
export default function Review() {
  const navigate = useNavigate();
  const [review, setReview] = useState('');
  const token = useToken();
  const userId = JSON.parse(localStorage.getItem('userData')).user.id;
  useEffect(() => {
    accommodationApi.getReview(token, userId).then((answer) => {
      setReview(answer.userHotelInfo[0].Room);
    });
  }, []);
  if (!review) {
    return 'loading';
  }
  return (
    <>
      <TitlePage>Escolha de hotel e quarto</TitlePage>
      <SessionTitle>Você já escolheu seu quarto:</SessionTitle>
      <HotelCard isSelected={true}>
        <HotelImage src={review?.Hotel?.imageUrl}></HotelImage>
        <HotelTitle>{review?.Hotel?.name}</HotelTitle>
        <HotelSubTitle>Quarto reservado
          <HotelInfo>{`${review?.code} (${review?.AccommodationTypeRoom[0]?.AccommodationType?.name})`}</HotelInfo>
        </HotelSubTitle>
        <HotelSubTitle>
          Pessoas no seu quarto
          <HotelInfo>{`Você ${review?.Reservation?.length <= 1 ? '' : ` e mais ${review?.Reservation?.length - 1}`}`}</HotelInfo>
        </HotelSubTitle>
      </HotelCard>
      <ChangeRoomButton onClick={() => navigate('/dashboard/hotel', {
        state: { isChangeRoom: true, hotelSelected: review?.Hotel?.id }
      })}>
        TROCAR DE QUARTO</ChangeRoomButton>
    </>

  );
}

