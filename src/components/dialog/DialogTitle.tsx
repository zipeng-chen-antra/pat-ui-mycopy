import React from 'react'
export interface DialogTitleProps {
  children: React.ReactNode;
}

const DialogTitle:(props: DialogTitleProps) => JSX.Element = ({children}) => {
  return (
    <div className='dialogtitle'>
      {children}
    </div>
  )
};

export default DialogTitle;