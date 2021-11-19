import { FC } from 'react';
import { NavLink } from "react-router-dom";

interface Props {
  link: string,
  exact: boolean;
  path?: string | string[];
}

const HiddenMenu: FC<Props> = ({ link, exact, children }) => {
  return (
    <NavLink
      to={link}
      exact={exact}
      className="block py-2 px-4 text-sm hover:bg-indigo-700 hover:text-white"
    >
      {children}
    </NavLink>
  )
}

export default HiddenMenu;
