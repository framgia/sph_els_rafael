import {FC} from 'react';
import NavigationLeftItem from './NavigationLeftItem/NavigationLeftItem'

const NavigationLeftItems:FC = (props) =>{
    return(
        <ul className="flex justify-between items-center">
            <NavigationLeftItem link="/" exact>
                Quizzes
            </NavigationLeftItem>
            <NavigationLeftItem link="/users" exact>
                Users
            </NavigationLeftItem>
        </ul>
    )
}

export default NavigationLeftItems;