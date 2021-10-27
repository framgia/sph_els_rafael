import {FC,useState} from 'react';



interface Props {
    Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | string;
    width?: number
    height?: number
}
  

const NavigationItem:FC<Props> = (props)=>{
    const [open,setOpen] = useState(false);

    const { Icon } = props;
    return(
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={()=> setOpen(!open)}>
              {Icon && <Icon/>}    
            </a>
            {open && props.children}
        </li>
    )
}

export default NavigationItem;