import React from 'react';
import Header from '~/c_components/Header/Header';

interface Props {
  GoToBack: () => void;
}

const AlarmPresenter = ({GoToBack}: Props) => {
  return (
    <>
      <Header text="알림" back={GoToBack} />
    </>
  );
};

export default AlarmPresenter;
