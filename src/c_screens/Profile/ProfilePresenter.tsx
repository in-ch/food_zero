import React from 'react';

import styled from 'styled-components/native';
import Header from '@components/Header/Header';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

interface Props {
  goBack: () => void;
}

const ProfilePresenter = ({goBack}: Props) => {
  return (
    <Container>
      <Header text="프로필" back={goBack} />
    </Container>
  );
};

export default ProfilePresenter;
