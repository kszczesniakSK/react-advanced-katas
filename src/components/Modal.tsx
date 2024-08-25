import React, { PropsWithChildren } from 'react';
// Create a component according to containment pattern

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Props = PropsWithChildren<ModalProps>

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;