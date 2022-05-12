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
    navigation.navigate('FoodAdd', {});
  };
  const GoToAgenda = () => {
    navigation.navigate('Agenda', {});
  };
  const GoToDetail = (selected: string) => {
    console.log('하이' + selected);
    navigation.navigate('Agenda', {selected});
  };
  const GoToCategory = () => {
    navigation.navigate('Category', {});
  };
  const GoToNeighbor = () => {
    navigation.navigate('Neighbor', {});
  };

  return (
    <>
      <HomePresenter
        GoToAlarm={GoToAlarm}
        GoToSearch={GoToSearch}
        GoToFoodAdd={GoToFoodAdd}
        GoToAgenda={GoToAgenda}
        GoToDetail={GoToDetail}
        GoToCategory={GoToCategory}
        GoToNeighbor={GoToNeighbor}
      />
    </>
  );
};

export default HomeContainer;
