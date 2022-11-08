import Dialog from "./Dialog";
import React, {useState} from "react";
import DialogAction from "./DialogAction";
import DialogContent from "./DialogContent";
import DialogContentText from "./DialogContentText";
import DialogTitle from "./DialogTitle";
import CSS from 'csstype';
import Input from "../Input";


export default {
  title: "Dialog",
  component: Dialog,
  subcomponents: {DialogAction, DialogContent, DialogContentText, DialogTitle}
};

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

export interface AlertDialogProps {
  /** set alert dialog title */
  title?: string;
  /** set alert dialog content */
  content?: string;
}

export const AlertDialog = ({title="Use Google's location service?", content="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}: AlertDialogProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose: () => void = () => {
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
          <button onClick={handleClose}>cancel</button>
          <button onClick={handleClose}>Subscribe</button>
        </DialogAction>
      </Dialog>
    </div>)
};

export const FormDialog = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose: () => void = () => {
    setShow(false);
  } 

  const handleClickButton: (e:React.MouseEvent<HTMLElement>) => void = (e) => {
    setShow(true);
  }

  return (<div>
    <button style={buttonstyles}
      onClick={handleClickButton}>open alert form</button>
      <Dialog show={show} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <Input type="text" name="name" style={{width:"100%"}}/>
        </DialogContent>
        <DialogAction>
          <button onClick={handleClose}>cancel</button>
          <button onClick={handleClose}>Subscribe</button>
        </DialogAction>
      </Dialog>
  </div>)
};