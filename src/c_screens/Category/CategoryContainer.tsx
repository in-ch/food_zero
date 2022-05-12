import React, {useState} from 'react';
import CategoryPresenter from './CategoryPresenter';
import {CategoryProps} from './Category';

const CategoryContainer = ({navigation}: CategoryProps) => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const goBack = () => {
    navigation.goBack();
  };
  const goToCategoryAdd = () => {
    navigation.navigate('CategoryAdd', {});
  };
  const onShowModal = () => {
    setModalShow(!modalShow);
  };
  return (
    <CategoryPresenter
      goBack={goBack}
      goToCategoryAdd={goToCategoryAdd}
      modalShow={modalShow}
      onShowModal={onShowModal}
    />
  );
};

export default CategoryContainer;
