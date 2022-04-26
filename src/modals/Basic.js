import React, { useContext } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import ModalContext from '../store/modalContext';
import { ModalInner, ModalWrapper } from '../components/Elements';

export default function Basic() {
  const { closeModal } = useContext(ModalContext);
  return (
    <ModalWrapper>
      <OutsideClickHandler onOutsideClick={closeModal}>
        <ModalInner>
          Hey ! je suis la fenêtre modale :)
          <br />
          <button onClick={closeModal}>Fermer</button>
        </ModalInner>
      </OutsideClickHandler>
    </ModalWrapper>
  );
}
