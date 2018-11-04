import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import intl from 'react-intl-universal';
import { Badge, Nav, NavItem, NavLink as RsNavLink } from 'reactstrap';
import classNames from 'classnames';
import { SidebarHeader, SidebarForm, SidebarFooter, SidebarMinimizer } from './';
import * as actions from './redux/actions';
export class Sidebar extends Component {
    static propTypes = {
      // common: PropTypes.object.isRequired,
      actions: PropTypes.object.isRequired,
    };
    constructor(props) {
        super(props);
        this.profile = {
            name: intl.get('profile'),
            url: '/profile',
            icon: 'spriteIcon icon-dashboard',
          };
    }

}