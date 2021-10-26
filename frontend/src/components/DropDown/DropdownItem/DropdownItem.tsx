import {FC} from 'react';
import classes from './DropdownItem.module.css';

interface Props {
    LeftIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    RightIcon?:React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
  

const DropdownItem:FC<Props> = (props) =>{
    const {LeftIcon,RightIcon} = props;
    return(
        <a href="#" className={classes.menuItem}>
            <span className={classes.iconButton}>{LeftIcon && <LeftIcon/>}</span>
            {props.children}

            <span className={classes.iconRight}>{RightIcon && <RightIcon/>}</span>
        </a>
    );
};

export default DropdownItem;