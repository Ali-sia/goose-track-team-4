import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/auth.selectors'; 

import {
  ModalWrapper,
  ModalContainer,
  HeadModal,
  UserAvatarModal,
  UserName,
  NavLinkStyled,
  UserSVG,
  LogOutContainer,
} from './UserInfoModal.styled';
import { UserMenuButtonAvatar, UserMenuButtonChar } from './UserInfo.styled';

import { LogoutBtn } from 'components/Buttons/LogoutBtn/LogoutBtn';

const handleClose = (event, onClose) => {
  if (event.key === 'Escape' || event.target === event.currentTarget) {
    onClose();
  }
};

const Modal = ({ onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleClose);

    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, []);

  const { name, avatar } = useSelector(selectUser);
  
  return (
    <ModalWrapper onClick={event => handleClose(event, onClose)}>
      <ModalContainer>
        <HeadModal>
          <UserAvatarModal>
            {avatar
              ? <UserMenuButtonAvatar src={avatar} alt={name + "'s avatar"}></UserMenuButtonAvatar>
              : <UserMenuButtonChar >{name?.charAt(0).toUpperCase()}</UserMenuButtonChar>}
          </UserAvatarModal>
          <UserName>
            {name}
          </UserName>
        </HeadModal>
        <NavLinkStyled to="/account" onClick={() => onClose()}>
          <UserSVG />
          My account
        </NavLinkStyled>
        <LogOutContainer>
          <LogoutBtn />
        </LogOutContainer>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;