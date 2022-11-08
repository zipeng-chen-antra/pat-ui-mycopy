import React, { useState } from 'react';
import CSS from 'csstype';
import Dialog from './Dialog';
import DialogTitle from './DialogTitle';
import DialogContent from './DialogContent';
import DialogContentText from './DialogContentText';
import DialogAction from './DialogAction';

const buttonstyles: CSS.Properties= {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  backgroundColor: "transparent",
  fontFamily: "Roboto Helvetica Arial sans-serif",
  fontWeight: 500,
  fontSize: "0.875rem",
  lineHeight: "1.75",
  textTransform: "uppercase",
  minWidth: "64px",
  padding: "5px 15px",
  borderRadius: "4px",
  border: "1px solid rgba(25, 118, 210, 0.5)",
  color: "#1976d2"
}

interface TestDemoProps {
  title?: string;
  content?: string;
  onClose?: () => void;
}

const TestDemo = ({title="Use Google's location service?", content="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.", onClose = () => {}}: TestDemoProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose: () => void = () => {
    onClose();
    setShow(false);
  } 

  const handleClickButton: (e:React.MouseEvent<HTMLElement>) => void = (e) => {
    setShow(true);
  }

  return (
    <div>
      <button style={buttonstyles}
      onClick={handleClickButton}>click to open!</button>
      <Dialog show={show} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}
          </DialogContentText>
        </DialogContent>
        <DialogAction>
          <button data-testid="cancel-button" onClick={handleClose}>cancel</button>
          <button onClick={handleClose}>Subscribe</button>
        </DialogAction>
      </Dialog>
    </div>)
};


export default TestDemo;