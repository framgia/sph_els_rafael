import { FC } from 'react';
import HiddenMenu from './HiddenMenu';
import { RootState } from '@store/reducers'
import { connect } from 'react-redux'

type Props = LinkStateProps;
const HiddenMenus: FC<Props> = ({ role, show }) => {
  return (
    <div className={`mobile-menu ${show && 'hidden'} md:hidden`}>
      <HiddenMenu link="/" exact>
        Dashboard
      </HiddenMenu>
      {(role === 0 || role === 1) ? (
        <>
          <HiddenMenu link="/quizzes" exact>
            Quizzes
          </HiddenMenu>
          <HiddenMenu link="/users" exact>
            Users
          </HiddenMenu>
        </>
      ) : (
        (
          <>
            <HiddenMenu link="/student/quizzes" exact>
              Quizzes
            </HiddenMenu>
            <HiddenMenu link="/student/users" exact>
              Users
            </HiddenMenu>
          </>
        )
      )}
    </div>
  )
}


interface LinkStateProps {
  role: number | null,
  show: boolean,
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  role: state.auth.userRole,
  show: state.layout.showHiddenMenu
})

export default connect(mapStateToProps, null)(HiddenMenus);
