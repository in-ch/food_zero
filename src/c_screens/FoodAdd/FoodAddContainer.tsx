import React from 'react';
import {FoodAddProps} from './FoodAdd';
import FoodAddPresenter from './FoodAddPresenter';

const FoodAddContainer = ({navigation}: FoodAddProps) => {
  const GoBack = () => {
    navigation.goBack();
  };
  return <FoodAddPresenter GoBack={GoBack} />;
};

export default FoodAddContainer;
