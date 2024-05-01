import classNames from 'classnames';
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import CloseModalIcon from '../Icons/CloseModalIcon';

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
  setModalOpen(props.isOpen);
  if (modalElement) {
    if (isModalOpen) {
        console.log("opened")
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }
}, [isModalOpen, props.isOpen]);


  return (
  <dialog ref={modalRef} onKeyDown={handleKeyDown} className="bg-yellow-50 rounded-md p-3 min-w-80" >
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