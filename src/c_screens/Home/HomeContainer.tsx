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
  const GoToFoodAdd = () => {
    console.log('Hello');
    navigation.navigate('FoodAdd', {});
  };
  const GoToAgenda = () => {
    navigation.navigate('Agenda', {});
  };
  const GoToDetail = () => {
    navigation.navigate('Detail', {});
  };

  return (
    <>
      <HomePresenter
        GoToAlarm={GoToAlarm}
        GoToSearch={GoToSearch}
        GoToFoodAdd={GoToFoodAdd}
        GoToAgenda={GoToAgenda}
        GoToDetail={GoToDetail}
      />
    </>
  );
};

export default HomeContainer;
