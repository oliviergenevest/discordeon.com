import React, { useContext } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import ModalContext from '../store/modalContext';
import { ModalInner, ModalWrapper } from '../components/Elements';

export default function Special() {
  const { closeModal } = useContext(ModalContext);
  return (
    <ModalWrapper>
      <OutsideClickHandler onOutsideClick={closeModal}>
        <ModalInner>
          On pourrait  mettre plus de contenu si besoin dans une fenêtre comme celle la. Morbi eu lorem convallis, tempor lorem varius, lacinia tellus. Etiam lectus tellus, ornare vitae suscipit at, pulvinar sed orci. Morbi eu lorem convallis, tempor lorem varius, lacinia tellus. Etiam lectus tellus, ornare vitae suscipit at, pulvinar sed orci.
        </ModalInner>
      </OutsideClickHandler>
    </ModalWrapper>
  );
}
