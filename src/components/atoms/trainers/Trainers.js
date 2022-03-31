import React from 'react';
import photos from '../../../assets/image/photo';
import { ReactComponent as DeleteIcon } from '../../../assets/image/icon/delete.svg';
import { Trainer, TrainersWrapper } from './Trainers.styles';

export const Trainers = () => {
  return (
    <TrainersWrapper>
      <span>Trenerzy</span>
      <Trainer>
        <img src={photos.userPhoto} alt="user face" />
        <span>Jan Kowalski</span>
        <DeleteIcon />
      </Trainer>
    </TrainersWrapper>
  );
};
