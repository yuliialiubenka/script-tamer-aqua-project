import { StyledRadioPanel } from './WaterRadioPanel.styled';
import { GoPlusCircle } from 'react-icons/go';
import theme from 'BasicStyle/themeJSX';
import { useState } from 'react';
import { GlobalModal } from 'components/GlobalModal/GlobalModal';
import { useSelector } from 'react-redux';
import { selectDailyNorma } from '../../../redux/auth/selectors';
import { selectEntries } from '../../../redux/tracker/selectors';
import TodayListModal from 'components/AddWaterModal/AddWaterModal';

export const WaterRadioPanel = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const entries = useSelector(selectEntries);
  const normUser = useSelector(selectDailyNorma);
  const total = entries.reduce((acc, currentValue) => acc + currentValue.amountWater, 0);

  const percentage = Math.round(total / (normUser * 10));

  let parsent = percentage;
  let bgColor;

  if (percentage >= 100) {
    parsent = 100;
    bgColor = theme.colors.primaryAccent;
  }

  return (
    <>
      <StyledRadioPanel $bgColor={bgColor} $parsent={parsent}>
        <div className="radio-panel-body">
          <h3 className="radio-panel-title">Today</h3>
          <div className="radio-panel-line">
            <span className="line-start"></span>
            <span className="line-center"></span>
            <span className="line-end"></span>
          </div>
          <div className="radio-panel-wrapper-parsent">
            <p className="radio-panel-parsent start">0%</p>
            <p className="radio-panel-parsent center">50%</p>
            <p className="radio-panel-parsent end">100%</p>
          </div>
        </div>
        <button onClick={handleOpenModal} className="radio-panel-btn">
          <GoPlusCircle className="icon-btn" />
          Add Water
        </button>
      </StyledRadioPanel>
      {openModal && (
        <GlobalModal
          $position={'center'}
          openModal={openModal}
          setOpenModal={setOpenModal}
         //  title={'add Water'}
        >
          <TodayListModal closeModal={setOpenModal} isEditing={false} />
        </GlobalModal>
      )}
    </>
  );
};
