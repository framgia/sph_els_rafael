import { FC } from 'react'
import {
  PencilAltIcon,
  MinusCircleIcon,
} from "@heroicons/react/solid";
import DeleteButton from "@components/UI/Buttons/DeleteButton";
import EditButton from "@components/UI/Buttons/EditButton";
import { useDispatch } from "react-redux";
interface Props {
  original: any,
  editAction?: (data: any) => void;
  deleteAction?: (data: any) => void;
}

const TableActionColumns: FC<Props> = ({ original, editAction, deleteAction }) => {
  const dispatch = useDispatch();
  return (
    <>
      <EditButton
        original={original}
        action={() => editAction && dispatch(editAction(original))}
      >
        <PencilAltIcon
          className="h-5 w-5 pr-2 text-gray-400"
          aria-hidden="true" />
        Edit
      </EditButton>
      <DeleteButton
        action={() => deleteAction && dispatch(deleteAction(original.id))}
      >
        <MinusCircleIcon
          className="h-5 w-5 pr-2 text-white"
          aria-hidden="true" />
        Delete
      </DeleteButton>
    </>
  )
}

export default TableActionColumns;
