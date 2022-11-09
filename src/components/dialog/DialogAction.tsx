import React from 'react'
export interface DialogActionProps {
  children: React.ReactNode;
}

const DialogAction = ({children}: DialogActionProps): JSX.Element => {
  return (
    <div className="dialog-action">{children}</div>
  )
};

export default DialogAction;