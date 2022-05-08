import React from 'react';
import styled from 'styled-components/native';

import Header from '@components/Header/Header';
import AgendaCalendar from '@components/AgendaCalendar/AgendaCalendar';

const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;
interface Props {
  GoBack: () => void;
}
const AgendaPresenter = ({GoBack}: Props) => {
  return (
    <Container>
      <Header text="아젠다" back={GoBack} />
      <AgendaCalendar />
    </Container>
  );
};

export default AgendaPresenter;
