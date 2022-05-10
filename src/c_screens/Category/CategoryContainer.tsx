import React, {useState} from 'react';
import CategoryPresenter from './CategoryPresenter';
import {CategoryProps} from './Category';

const CategoryContainer = ({navigation}: CategoryProps) => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const goBack = () => {
    navigation.goBack();
  };
  const onShowModal = () => {
    setModalShow(!modalShow);
  };
  return (
    <CategoryPresenter
      goBack={goBack}
      modalShow={modalShow}
      onShowModal={onShowModal}
    />
  );
};

export default CategoryContainer;
