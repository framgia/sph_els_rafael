import { FC } from 'react';
import classes from './EditButton.module.css';


interface Props {
  original: any;
  action?: (data: any) => void;
}

const EditButton: FC<Props> = ({ action, children, original }) => {

  return (
    <button
      onClick={() => action && action(original)}
      className={classes.editBtn}
    >
      {children}
    </button>
  )
}

export default EditButton;


