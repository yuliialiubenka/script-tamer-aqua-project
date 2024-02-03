import React, { useState } from 'react';
import {
  ModalWrap,
  TextStyle,
  ButtonBox,
  Button,
} from './WaterDelModal.styled';

export const WaterDelModal = ({ closeModal }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [recordId, setRecordId] = useState(null);

  const handleDelete = () => {
    setIsDeleting(true);
    console.log('Deleting record with ID:', recordId);
    setIsDeleting(false);
    closeModal();
  };

  // eslint-disable-next-line
  const handleRecordIdChange = newRecordId => {
    setRecordId(newRecordId);
  };

  return (
    <ModalWrap>
      <TextStyle>Are you sure you want to delete the entry?</TextStyle>
      <ButtonBox>
        <Button onClick={handleDelete}>
          Delete {isDeleting && 'Deleting...'}
        </Button>
        <Button onClick={closeModal}>Cancel</Button>
      </ButtonBox>
    </ModalWrap>
  );
};