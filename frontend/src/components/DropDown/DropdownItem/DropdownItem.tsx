import { FC } from 'react';


interface Props {
    LeftIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    RightIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}


const DropdownItem: FC<Props> = (props) => {
    const { LeftIcon, RightIcon } = props;
    return (
        <a href="#" className="menu-item">
            <span className="icon-button">{LeftIcon && <LeftIcon />}</span>
            {props.children}
            <span className="icon-right">{RightIcon && <RightIcon />}</span>
        </a>
    );
};

export default DropdownItem;

