import React from 'react';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { paramsForNotify } from '../../redux/notifications';
import {
  deleteWaterEntry,
  getDailyWaterAmount,
} from '../../redux/tracker/operations';

import {
  ModalWrap,
  TextStyle,
  ButtonBox,
  Button,
} from './WaterDelModal.styled';

export const WaterDelModal = ({ id, closeModal, title }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteWaterEntry(id))
      .then(() => {
        Notiflix.Notify.success('Record deleted successfully.', paramsForNotify);
        dispatch(getDailyWaterAmount());
        closeModal();
      })
      .catch(error => {
        Notiflix.Notify.failure(`Failed to delete: ${error.message}`, paramsForNotify);
      });
    closeModal();
  };

  return (
    <ModalWrap>
      <h2 className="modal-title">{title}</h2>
      <TextStyle>Are you sure you want to delete the entry?</TextStyle>
      <ButtonBox>
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={() => closeModal()}>Cancel</Button>
      </ButtonBox>
    </ModalWrap>
  );
};
