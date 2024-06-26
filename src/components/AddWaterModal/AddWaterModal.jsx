import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { paramsForNotify } from '../../redux/notifications';

import {
  addWaterEntry,
  updateWaterEntry,
  getDailyWaterAmount,
} from '../../redux/tracker/operations';

import {
  AddWater,
  ChooseText,
  AmountText,
  ButtonWrapper,
  StyledMinusIcon,
  StyledPlusIcon,
  FormStyled,
  ButtonSaveWrapper,
  StyledAddWaterModal,
  GlassContainer,
  GlassStyle,
  TextAmount,
  TimeValue,
} from './AddWaterModal.styled';

const TodayListModal = ({ isEditing, data, closeModal }) => {
  const [amountWater, setAmountWater] = useState(
    isEditing ? data.amountWater : 0
  );
  const [recordedTime, setRecordedTime] = useState(
    isEditing ? new Date(data.time) : new Date()
  );

  const dispatch = useDispatch();

  const handleAmountChange = evt => {
    const { name } = evt.currentTarget;

    switch (name) {
      case 'minus':
        setAmountWater(state => Math.max(state - 50, 0));
        break;
      case 'plus':
        setAmountWater(state => Math.min(state + 50, 5000));
        break;
      case 'input':
        const inputValue = Number(evt.target.value);
        const validInputValue = Math.min(Math.max(inputValue, 0), 5000);
        setAmountWater(validInputValue);
        break;
      default:
    }
  };

  const handleTimeChange = evt => {
    const timeString = evt.target.value;
    const [hours, minutes] = timeString.split(':').map(Number);

    const newRecordedTime = new Date(recordedTime);
    newRecordedTime.setHours(hours);
    newRecordedTime.setMinutes(minutes);

    setRecordedTime(newRecordedTime);
  };

  const handleSave = async evt => {
    evt.preventDefault();

    if (amountWater === 0) {
      Notiflix.Notify.warning(
        'A non-zero value must be entered for the amount of water', paramsForNotify
      );
      return;
    }

    if (amountWater < 0 || amountWater === '') {
      Notiflix.Notify.warning(
        'It is necessary to enter a positive value for the amount of water', paramsForNotify
      );
      return;
    }

    const saveWater = {
      amountWater: amountWater,
      time: recordedTime,
    };

    if (isEditing) {
      // Edit mode
      dispatch(updateWaterEntry({ ...saveWater, waterId: data._id }))
        .then(() => {
          Notiflix.Notify.success('Amount of water updated successfully!', paramsForNotify);
          dispatch(getDailyWaterAmount());
          closeModal();
        })
        .catch(error => {
          Notiflix.Notify.failure(
            `Failed to update amount of water: ${error.message}`, paramsForNotify
          );
        });
    } else {
      // Add mode
      dispatch(addWaterEntry(saveWater))
        .then(() => {
          Notiflix.Notify.success('Amount of water added successfully!', paramsForNotify);
          dispatch(getDailyWaterAmount());
          closeModal();
        })
        .catch(error => {
          Notiflix.Notify.failure(
            `Failed to add amount of water: ${error.message}`, paramsForNotify
          );
        });
    }
  };

  const title = isEditing ? 'Edit the entered amount of water' : 'Add water';

  return (
    <StyledAddWaterModal>
      <AddWater>{title}</AddWater>
      <div>
        {isEditing && (
          <GlassContainer>
            <GlassStyle />
            <TextAmount>{data.amountWater}ml</TextAmount>
            <TimeValue>
              {new Date(data.time).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </TimeValue>
          </GlassContainer>
        )}
      </div>

      <ChooseText>
        {isEditing ? 'Correct entered data:' : 'Choose a value:'}
      </ChooseText>

      <AmountText>Amount of water:</AmountText>

      <ButtonWrapper>
        <button
          type="button"
          name="minus"
          onClick={handleAmountChange}
          disabled={amountWater === 0}
        >
          <StyledMinusIcon aria-label="minus_button" />
        </button>

        <span>{amountWater}ml</span>

        <button type="button" name="plus" onClick={handleAmountChange}>
          <StyledPlusIcon aria-label="plus_button" />
        </button>
      </ButtonWrapper>

      <FormStyled>
        <label>
          Recording time:
          <input
            type="time"
            value={recordedTime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
            onChange={handleTimeChange}
          />
        </label>

        <label>
          Enter the value of the water used:
          <input
            name="input"
            type="number"
            value={amountWater}
            onChange={evt => handleAmountChange(evt)}
            min="1"
            max="5000"
          />
        </label>

        <ButtonSaveWrapper>
          <p>{amountWater}ml</p>
          <button onClick={handleSave}>Save</button>
        </ButtonSaveWrapper>
      </FormStyled>
    </StyledAddWaterModal>
  );
};

export default TodayListModal;
