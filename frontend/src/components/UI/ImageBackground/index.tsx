import { FC } from 'react';
import classes from './ImageBackground.module.css';

const ImageBackground: FC = ({ children }) => {
  return (
    <div className={classes.bgImg}>
      {children}
    </div>
  )
}

export default ImageBackground;

