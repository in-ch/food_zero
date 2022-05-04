/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View} from 'react-native';
import CCalendar from '@components/Calendar/Calendar';
import {statusBarHeight} from '@utills/constants';
import {SizedBox} from '@components/SizedBox';
import MenuBar from '@components/MenuBar/MenuBar';
import Storys from '@components/Storys/Storys';

interface Props {
  GoToAlarm: () => void;
}

const HomePresenter = ({GoToAlarm}: Props) => {
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
      <MenuBar GoToAlarm={GoToAlarm} />
      <Storys />
      <CCalendar />
    </View>
  );
};

export default HomePresenter;
