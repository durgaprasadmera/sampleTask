import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
      const pStyle = {
  fontSize: '15px',
  textAlign: 'center',
   right: "150px"

};
export class Sidebar extends Component {
  static propTypes = {
    sidebar: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  addProfile(){
  window.location = './Profile'
}

  render() {
    return (

      <div className="examples-side-panel">
        <h1>People List</h1>
        <ul>
          <li>
            <Link to="./Profile">Andrew Amernante </Link>
          </li>
          <li>
            <Link to="./Profile" >Frank Wang</Link>
          </li>
          <li>
            <Link to="./Profile"> Sissi Chen</Link>
          </li>
          <li>
            <Link to="./Profile">Diego Garcia</Link>
          </li>
        </ul>
        <div className="memo">
         This is sample data
        </div>
            <div style={pStyle}>
        <input  type="button" value="+" mini={true} backgroundColor="#0095da" onClick={() => { this.addProfile(); }}>
        </input>
            </div>
      </div>
        
       
        
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    sidebar: state.sidebar,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
