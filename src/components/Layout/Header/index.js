import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo.jpg';
import { Row, Col } from '../../Grid';
import StyledHeader from './styles';

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <Row>
        <Col span={12}>
          <Link
            to="/"
          >
            <img className="logo" src={logo} alt="logo" />
            <h1>Welcome to GiPHY</h1>
          </Link>
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default Header;
