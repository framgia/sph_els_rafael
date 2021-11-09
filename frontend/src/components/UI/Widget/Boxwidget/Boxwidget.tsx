import { FC } from 'react'
import AddButton from '../AddButton/AddButton';
import classes from './Boxwidget.module.css';

interface BoxInterface {
    title: string,
    action?: (data: object) => void;
    btnName: string;
}

const Boxwidget: FC<BoxInterface> = ({ action, title, children, btnName }) => {
    return (
        <div className={classes.Boxwidget}>
            <div className={classes.BoxwidgetHead}>
                <h2>{title}</h2>
                <div className={classes.actionButton}>
                    <AddButton action={() => action && action({})} className={classes.addBtn} >
                        {btnName}
                    </AddButton>
                </div>
            </div>
            <div className="p-5">
                {children}
            </div>
        </div>
    )
}


export default Boxwidget;

