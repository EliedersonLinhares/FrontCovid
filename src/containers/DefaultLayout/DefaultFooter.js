import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    //const { children, ...attributes } = this.props;

    return (
      <React.Fragment >
        <span className="text-white ">Eliederson Linhares - 2020&nbsp;&nbsp;
        <a href="https://github.com/EliedersonLinhares">
         <i className="fa fa-github fa-lg mt-4" ></i>
         </a>&nbsp;&nbsp;
         <a href="https://www.linkedin.com/in/eliederson-da-silva-linhares-98738212a/">
         <i className="fa fa-linkedin fa-lg mt-4" ></i>
         </a>
         </span>
         
        

        <span className="ml-auto" ><a href="https://coreui.io/react">CoreUI for React</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
