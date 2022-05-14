import React from 'react';
import {ProfileProps} from './Profile';
import ProfilePresenter from './ProfilePresenter';

const ProfileContainer = ({navigation}: ProfileProps) => {
  const goBack = () => {
    navigation.goBack();
  };
  return <ProfilePresenter goBack={goBack} />;
};

export default ProfileContainer;
