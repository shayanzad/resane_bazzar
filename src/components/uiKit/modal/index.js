import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { StyledModal } from "./style";
import Button from "../button";

const GlobalModal = ({
  modalProps = {},
  buttonProps,
  children,
  closeFlag,
  open,
  manualOpen
  
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);     
  }, [closeFlag]);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  const handleCancel = () => {
    if (modalProps.onCancel  ) {
      modalProps.onCancel();
    }
    if (!manualOpen) setIsOpen(false);
  };

  const handleClick = () => {
    !manualOpen && setIsOpen(true);
    if (buttonProps.onClick) {
      buttonProps.onClick();
    }
  };
  

  return (
    <>
      {buttonProps && (
        <Button {...buttonProps} onClick={handleClick}>
          {buttonProps.text ? buttonProps.text : "کلیک کنید"}
        </Button>
      )}
      <StyledModal
        isDeleteModal={modalProps.isDeleteModal}
        keyboard={true}
        closable={false}
        zIndex={modalProps.zIndex ? modalProps.zIndex : 1050}
        footer={!modalProps.cancelText ? 
          <div className="single-button">
            <button onClick={handleCancel} type="primary" className="ant-btn ant-btn-primary">
              <span>{modalProps.okText}</span>
            </button>
          </div> :
          undefined
        }
        {...modalProps}
        visible={isOpen}
        onCancel={handleCancel}
        title={modalProps.header ? modalProps.header : null}

      >              

        {children}
      </StyledModal>
    </>
  );
};
GlobalModal.propTypes = {
  modalProps: PropTypes.object,
  buttonProps: PropTypes.object,
  closeFlag: PropTypes.bool,
  isComfirmModal: PropTypes.bool,
  manualOpen: PropTypes.bool,
  open: PropTypes.bool,
  children: PropTypes.any,
};
export default GlobalModal;
