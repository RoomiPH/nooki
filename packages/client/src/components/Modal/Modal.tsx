import classNames from 'classnames';
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import CloseModalIcon from '../Icons/closeModalIcon';

type Props = {
    isOpen: boolean
    onClose?: any
    hasCloseBtn: boolean
    children: JSX.Element | JSX.Element[]
    className?: string
}

const ModalWrapper = ( props: Props ): ReactElement => {
 const [isModalOpen, setModalOpen] = useState(props.isOpen);
 const modalRef = useRef<HTMLDialogElement | null>(null);

 const handleCloseModal = () => {
  if (props.onClose) {
    props.onClose();
  }
  setModalOpen(false);
};

const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
  if (event.key === "Escape") {
    handleCloseModal();
  }
};

 useEffect(() => {
  const modalElement = modalRef.current;
  if (modalElement) {
    if (isModalOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }
}, [isModalOpen]);


  return (
  <dialog ref={modalRef} onKeyDown={handleKeyDown} className='bg-yellow-50 rounded-md p-3 min-w-60' >
    <div 
        className={props.className}
    >
    {props.hasCloseBtn && (
    <div className="flex justify-end">
        <button className="modal-close-btn" onClick={handleCloseModal}>
            <CloseModalIcon/>
        </button>
    </div>
    )}
    {props.children}
    </div>
  </dialog>
);
}

export default ModalWrapper