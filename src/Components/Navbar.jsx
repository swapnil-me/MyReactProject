import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {

  const Nav = styled.nav`
  .navbar_list{
    display: flex;
    gap: 3rem;

    li{
      list-style: none;

      .navbar_links{
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({theme}) => theme.colors.helper};
        }
      }
    }
  }
`

  return <Nav>
    <div className='menuIcon'>
      <ul className='navbar_list'>
        <li>
          <NavLink className="navbar_links" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="navbar_links" to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink className="navbar_links" to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink className="navbar_links" to="/service">Service</NavLink>
        </li>
      </ul>
    </div>
  </Nav>
};



export default Navbar;