import React from 'react';
import {HomeProps} from './Home';
import HomePresenter from './HomePresenter';

const HomeContainer = ({navigation}: HomeProps) => {
  const GoToAlarm = () => {
    navigation.navigate('Alarm', {});
  };
  const GoToSearch = () => {
    navigation.navigate('Search', {});
  };
  return (
    <>
      <HomePresenter GoToAlarm={GoToAlarm} GoToSearch={GoToSearch} />
    </>
  );
};

export default HomeContainer;
