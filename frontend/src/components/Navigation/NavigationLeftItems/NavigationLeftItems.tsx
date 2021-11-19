import { FC } from 'react';
import NavigationLeftItem from './NavigationLeftItem/NavigationLeftItem'
import { RootState } from '@store/reducers'
import { connect } from 'react-redux'

type Props = LinkStateProps;
const NavigationLeftItems: FC<Props> = ({ role }) => {
    return (
        <div className="hidden md:flex items-center space-x-1">
            <NavigationLeftItem link="/" exact>
                Dashboard
            </NavigationLeftItem>
            {(role === 0 || role === 1) && (
                <>
                    <NavigationLeftItem link="/quizzes" exact>
                        Quizzes
                    </NavigationLeftItem>
                    <NavigationLeftItem link="/users" exact>
                        Users
                    </NavigationLeftItem>
                </>
            )}
        </div>
    )
}

interface LinkStateProps {
    role: number | null,
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
    role: state.auth.userRole
})

export default connect(mapStateToProps, null)(NavigationLeftItems);


