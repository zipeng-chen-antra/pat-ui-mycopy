import React from 'react'

export interface DialogContentTextProps {
  children: string
}
const DialogContentText = ({children}: DialogContentTextProps ): JSX.Element => {
  return (
    <div className='dialog-content-text'>{children}</div>
  )
};

export default DialogContentText;