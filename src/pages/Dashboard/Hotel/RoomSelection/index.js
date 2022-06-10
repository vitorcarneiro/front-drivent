/* eslint-disable indent */
/* eslint-disable padded-blocks */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as accommodationApi from '../../../../services/accommodationApi';
import useToken from '../../../../hooks/useToken';
import { BsFillPersonFill, BsPerson } from 'react-icons/bs';
import { RoomContainer, RoomContent, RoomCode, ConfirmButton } from './style';

export default function RoomSelection({ hotelId }) {
  const [rooms, setRooms] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const navigate = useNavigate();
  const token = useToken();
  const { user } = JSON.parse(localStorage.getItem('userData'));

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(hotelId);
    handleGetRooms();
  }, [hotelId]);

  function handleSelectRoom(roomId) {
    setRoomId(roomId);
  }

  function handleSelectUserRoom(rooms) {
    for (let i = 0; i < rooms.length; i++) {
      const room = rooms[i];

      for (let j = 0; j < room.reservations.length; j++) {
        const reservation = room.reservations[j];

        if (reservation.userId === user.id) {
          setRoomId(reservation.roomId);
        }
      }
    }
  }

  async function handleGetRooms() {
    try {
      const response = await accommodationApi.getRooms(token, hotelId);

      setRooms(response);
      handleSelectUserRoom(response);
    } catch (error) {
      toast(error);
    }
  }

  async function handleConfirmRoom() {
    try {
      await accommodationApi.updateRoom(token, roomId);

      navigate('/dashboard/review');
    } catch (error) {
      toast('Ocorreu um erro ao tentar alugar o quarto!');
    }
  }

  const roomsReader = rooms?.map((room) => {
    return (
      <RoomContent
        isFull={room.capacity === room.reservations.length}
        isSelected={roomId === room.id}
        key={room.id}
        onClick={() => handleSelectRoom(room.id)}
      >
        <RoomCode>{room.code}</RoomCode>

        {room.accommodationType === 'Single' ? (
          !room.reservations.length ? (
            <div>
              <BsPerson size={25} />
            </div>
          ) : (
            <div>
              <BsFillPersonFill
                color={
                  room.reservations[0].userId === user?.id
                    ? '#FF4791'
                    : room.capacity === room.reservations.length
                    ? '#8C8C8C'
                    : '#000000'
                }
                size={25}
              />
            </div>
          )
        ) : room.accommodationType === 'Double' ? (
          !room.reservations.length ? (
            <div>
              <BsPerson size={25} />
              <BsPerson size={25} />
            </div>
          ) : (
            <div>
              {2 !== room.reservations.length && <BsPerson size={25} />}

              {room.reservations.map((reservation) => (
                <BsFillPersonFill
                  key={reservation.id}
                  color={
                    reservation.userId === user?.id
                      ? '#FF4791'
                      : room.capacity === room.reservations.length
                      ? '#8C8C8C'
                      : '#000000'
                  }
                  size={25}
                />
              ))}
            </div>
          )
        ) : !room.reservations.length ? (
          <div>
            <BsPerson size={25} />
            <BsPerson size={25} />
            <BsPerson size={25} />
          </div>
        ) : (
          <div>
            {3 !== room.reservations.length && room.reservations.length === 2 ? (
              <BsPerson size={25} />
            ) : (
              room.reservations.length === 1 && (
                <>
                  <BsPerson size={25} />
                  <BsPerson size={25} />
                </>
              )
            )}

            {room.reservations.map((reservation) => (
              <BsFillPersonFill
                key={reservation.id}
                color={
                  reservation.userId === user?.id
                    ? '#FF4791'
                    : room.capacity === room.reservations.length
                    ? '#8C8C8C'
                    : '#000000'
                }
                size={25}
              />
            ))}
          </div>
        )}
      </RoomContent>
    );
  });

  return (
    <>
      <RoomContainer>{roomsReader}</RoomContainer>

      <ConfirmButton onClick={() => handleConfirmRoom()}>RESERVAR QUARTO</ConfirmButton>
    </>
  );
}
