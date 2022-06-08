import useReservation from '../../../hooks/api/useReservation';
import { Container, TitlePage, Content, NotPaid } from './style';

import HotelSelection from './HotelSelection';

export default function Hotel() {
  const { reservation } = useReservation();

  return (
    <Container>
      <TitlePage>Escolha de hotel e quarto</TitlePage>
      {!reservation ? (
        <Content>
          <NotPaid>
            Você precisa ter confirmado pagamento antes <br />
            de fazer escolha de hospedagem
          </NotPaid>
        </Content>
      ) : reservation.Transaction[0].modalitySelected === 'Online' ? (
        <Content>
          <NotPaid>
            Sua modalidade de ingresso não inclui hospedagem <br />
            Prossiga para a escolha de atividades
          </NotPaid>
        </Content>
      ) : (
        <HotelSelection/>
      )}
    </Container>
  );
}
