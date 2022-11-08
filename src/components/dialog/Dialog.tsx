import React, { useEffect, useState } from 'react';

export interface DialogProps {
  /** user can use this boolean to decide whether the dialog will show up op not */
  show: boolean;
  /** user can define a function that will be called when the dialog is closed */
  onClose: () => void;
  /** user can use the child component to form a dialog */
  children?: React.ReactNode;
}

const Dialog = ({show, onClose, children}: DialogProps): JSX.Element => {

  const handleBackgroundClick: (e: React.MouseEvent<HTMLElement>) => void = (e) => {
    onClose();
  }

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
  },[show]);

  
  if (!show) {
    return <></>;
  } else {
    return (
      <>
        <div data-testid="dim-back" className='dim-back' onClick={handleBackgroundClick} />
        <div className="main-container">
          <div className="dialog-container">
            {children}
          </div>
        </div>
      </>
      
      
    )
  }
}

export default Dialog;