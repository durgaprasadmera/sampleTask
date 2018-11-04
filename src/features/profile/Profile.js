import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Json from './people.json'

const names = ['Michael', 'Brian', 'John'];

export class Profile extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };



  render() {
    
    return (

      <div className="profile-profile">
        <p id="test">
        { names.map(function (name) {
          
       return name ;
       
      })
        }
        </p>
      
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    profile: state.profile,
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
)(Profile);
