import React from 'react';
import CategoryPresenter from './CategoryPresenter';
import {CategoryProps} from './Category';

const CategoryContainer = ({navigation}: CategoryProps) => {
  const goBack = () => {
    navigation.goBack();
  };
  return <CategoryPresenter goBack={goBack} />;
};

export default CategoryContainer;
