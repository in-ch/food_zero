import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {RootTabParamList} from '@navigation/RootNavigation';
import AgendaContainer from './AgendaContainer';

export interface AgendaProps {
  navigation: NavigationProp<RootTabParamList, 'Agenda'>;
}

const Agenda = ({navigation}: AgendaProps) => {
  return (
    <>
      <AgendaContainer navigation={navigation} />
    </>
  );
};

export default Agenda;
