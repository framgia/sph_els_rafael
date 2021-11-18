import { FC } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '@store/actions/index'
import { bindActionCreators } from 'redux';
import { toggleMeu } from '@store/actions/action-creator/'
import { connect } from 'react-redux';
import { RootState } from '@store/reducers';
import BurgerIcon from '@components/SVG/BurgerIcon'


type Props = LinkStateProps & LinkDispatchProps;

const HamburgerBtn: FC<Props> = ({ toggleMenu, showMenu }) => {

  return (
    <div className="md:hidden flex items-center">
      <button onClick={() => toggleMenu(!showMenu)} className="mobile-menu-button border-0 p-2 m-0 bg-gray-700 rounded-full">
        <BurgerIcon />
      </button>
    </div>
  )
}

interface LinkStateProps {
  showMenu: boolean,
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  showMenu: state.layout.showHiddenMenu
})

interface LinkDispatchProps {
  toggleMenu: (data: boolean) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: any):
  LinkDispatchProps => ({
    toggleMenu: bindActionCreators(toggleMeu, dispatch)
  })

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerBtn);

