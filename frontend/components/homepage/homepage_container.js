import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Homepage from './homepage';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
    
  }
};

const mapDispatchToProps = dispatch =>
{return {
  logout: () => dispatch(logout())
};};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
