/**
 * Created by bookason on 20/06/17.
 */

import { connect } from 'react-redux';
import UserInfo from 'components/UserInfo';


const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

const LiveUserInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);

export default LiveUserInfo;