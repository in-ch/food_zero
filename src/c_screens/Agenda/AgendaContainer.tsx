import React from 'react';
import AgendaPresenter from './AgendaPresenter';
import {AgendaProps} from './Agenda';

const AgendaContainer = ({navigation}: AgendaProps) => {
  const GoBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <AgendaPresenter GoBack={GoBack} />
    </>
  );
};

export default AgendaContainer;
