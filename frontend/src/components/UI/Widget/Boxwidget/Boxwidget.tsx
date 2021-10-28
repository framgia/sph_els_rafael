import { FC } from 'react'
import AddButton from '../AddButton/AddButton';
import classes from './Boxwidget.module.css';

interface BoxInterface {
    title: string,
}

const Boxwidget: FC<BoxInterface> = ({ title, children }) => {
    return (
        <div className={classes.Boxwidget}>
            <div className={classes.BoxwidgetHead}>
                <h2>{title}</h2>
                <div className={classes.actionButton}>
                    <AddButton className={classes.addBtn} >
                        New Quiz
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