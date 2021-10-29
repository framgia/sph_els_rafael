import { FC } from 'react'

interface Props {
    action?: () => void;
    className?: string;
}

const AddButton: FC<Props> = ({ action, children, className }) => {
    return (
        <div onClick={action} className={className}>
            {children}
        </div>
    )
}

export default AddButton;

