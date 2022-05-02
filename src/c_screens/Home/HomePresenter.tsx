/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import CCalendar from '@components/Calendar/Calendar';
import {statusBarHeight} from '@utills/constants';
import {SizedBox} from '@components/SizedBox';
import MenuBar from '~/c_components/MenuBar/MenuBar';
import Storys from '~/c_components/Storys/Storys';
import {View} from 'react-native';

const HomePresenter = () => {
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
      <MenuBar />
      <Storys />
      <CCalendar />
    </View>
  );
};

export default HomePresenter;
