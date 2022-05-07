/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View} from 'react-native';
import CCalendar from '@components/Calendar/Calendar';
import {statusBarHeight} from '@utills/constants';
import {SizedBox} from '@components/SizedBox';
import MenuBar from '@components/MenuBar/MenuBar';
import Storys from '@components/Storys/Storys';
import AgendaCalendar from '~/c_components/AgendaCalendar/AgendaCalendar';

interface Props {
  GoToAlarm: () => void;
  GoToSearch: () => void;
  GoToFoodAdd: () => void;
  GoToAgenda: () => void;
  goAgenda: boolean;
  GoToAgendaCal: () => void;
}

const HomePresenter = ({
  GoToAlarm,
  GoToSearch,
  GoToFoodAdd,
  GoToAgenda,
  goAgenda,
  GoToAgendaCal,
}: Props) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <SizedBox.Custom
        margin={statusBarHeight}
        style={{
          backgroundColor: '#F4F4F4',
        }}
      />
      <MenuBar GoToAlarm={GoToAlarm} GoToSearch={GoToSearch} />
      <Storys />
      {goAgenda ? (
        <AgendaCalendar />
      ) : (
        <CCalendar GoToFoodAdd={GoToFoodAdd} GoToAgenda={GoToAgendaCal} />
      )}
    </View>
  );
};

export default HomePresenter;
