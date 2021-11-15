import { FC, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { authLogout } from '@store/actions/action-creator';
import { RootState } from '@store/reducers';
import { connect } from 'react-redux';
import Spinner from '@components/UI/Spinner/Spinner';

type Props = LinkStateProps;

const Logout: FC<Props> = ({ logoutLoading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authLogout());
  }, [])

  return logoutLoading ? (
    <Spinner />
  ) : null;
}

interface LinkStateProps {
  logoutLoading: boolean,
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  logoutLoading: state.auth.loading,
})

export default connect(mapStateToProps, null)(Logout)
