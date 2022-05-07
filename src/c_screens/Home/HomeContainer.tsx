import React, {useState} from 'react';
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

  const [goAgenda, setGoAgenda] = useState<boolean>(false);
  const GoToAgendaCal = () => {
    setGoAgenda(!goAgenda);
  };
  return (
    <>
      <HomePresenter
        GoToAlarm={GoToAlarm}
        GoToSearch={GoToSearch}
        GoToFoodAdd={GoToFoodAdd}
        GoToAgenda={GoToAgenda}
        goAgenda={goAgenda}
        GoToAgendaCal={GoToAgendaCal}
      />
    </>
  );
};

export default HomeContainer;
