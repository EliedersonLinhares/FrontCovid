import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav,NavItem} from 'reactstrap';
import PropTypes from 'prop-types';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'

  
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment >
        <AppSidebarToggler className="d-lg-none" display="md" mobile  />
        <AppNavbarBrand 
          full={{ src: logo, width: 110, height: 25, alt: 'CoreUI Logo' }}
         
        />
        <AppSidebarToggler className="d-md-down-none " display="lg" />

        
        <Nav className="ml-auto" navbar >
         
        </Nav><Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
            <NavLink to="#" className="text-white">Sistema de monitoramento da covid-19</NavLink>
          </NavItem>
        </Nav>

    
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
