import React from 'react';
import {HomeProps} from './Home';
import HomePresenter from './HomePresenter';

const HomeContainer = ({navigation}: HomeProps) => {
  const GoToAlarm = () => {
    navigation.navigate('Alarm', {});
  };
  return (
    <>
      <HomePresenter GoToAlarm={GoToAlarm} />
    </>
  );
};

export default HomeContainer;
