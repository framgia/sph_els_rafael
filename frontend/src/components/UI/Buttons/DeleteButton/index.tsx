import { FC } from 'react'
import Swal from 'sweetalert2'
import classes from './DeleteButton.module.css';

interface Props {
  action?: () => void;
}

const DeleteButton: FC<Props> = ({ action, children }) => {

  const alertDelete = (): void => {
    Swal.fire({
      title: 'Do you want to Delete the Data?',
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Confirm',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        action && action();
      }
    })
  }

  return (
    <button
      onClick={() => alertDelete()}

      className={classes.buttonDel}
    >
      {children}
    </button>
  )
}

export default DeleteButton;
