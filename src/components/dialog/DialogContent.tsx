import React from 'react'

export interface DialogContentProp {
  children: React.ReactNode;
}

const DialogContent:(prop: DialogContentProp) => JSX.Element = ({children}) => {
  return (
    <div className="dialog-content">{children}</div>
  )
};

export default DialogContent;