import { useState } from 'react';
import { Div, Button } from './UserLogoModal.styled';
import SettingModal from '../SettingsModal/SettingModal';
import UserLogoutModal from './UserLogoutModal';
import { GlobalModal } from 'components/GlobalModal/GlobalModal';

import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { HiArrowRightOnRectangle } from 'react-icons/hi2';

const UserLogoModal = ({ closeModal }) => {
  const [isOpenUserInfoModal, setOpenUserInfoModal] = useState(false);
  const [isOpenUserLogoutModal, setOpenUserLogoutModal] = useState(false);

  const openUserInfoModal = () => {
    setOpenUserInfoModal(true);
  };

  if (isOpenUserInfoModal || isOpenUserLogoutModal) {
    window.removeEventListener('click', closeModal);
  } else {
    window.addEventListener('click', closeModal);
  }

  const openUserLogoutModal = () => {
    setOpenUserLogoutModal(true);
  };

  return (
    <>
      <Div>
        <Button onClick={openUserInfoModal}>
          <HiOutlineCog6Tooth
            width={16}
            height={16}
            color="#407BFF"
            className="svg"
          />
          Settings
        </Button>
        <Button onClick={openUserLogoutModal}>
          <HiArrowRightOnRectangle
            width={16}
            height={16}
            color="#407BFF"
            className="svg"
          />
          Logout
        </Button>
      </Div>
      {isOpenUserInfoModal && (
        <GlobalModal
          openModal={isOpenUserInfoModal}
          setOpenModal={setOpenUserInfoModal}
        >
          <SettingModal title={'Title'} />
        </GlobalModal>
      )}
      {isOpenUserLogoutModal && (
        <GlobalModal
          $position={'center'}
          openModal={isOpenUserLogoutModal}
          setOpenModal={setOpenUserLogoutModal}
        >
          <UserLogoutModal onClose={setOpenUserLogoutModal} title={'Log out'} />
        </GlobalModal>
      )}
    </>
  );
};

export default UserLogoModal;
