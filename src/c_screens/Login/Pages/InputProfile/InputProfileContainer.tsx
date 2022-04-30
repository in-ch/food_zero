import React from 'react';
import {NavigationProp} from '@react-navigation/native';

import {RootTabParamList} from '../../../../navigation/RootNavigation';
import InputProfilePresenter from './InputProfilePresenter';

export interface InputProfileProp {
  navigation: NavigationProp<RootTabParamList, 'InputProfile'>;
}

const InputProfileContainer = ({navigation}: InputProfileProp) => {
  const GoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <InputProfilePresenter GoBack={GoBack} />
    </>
  );
};

export default InputProfileContainer;
