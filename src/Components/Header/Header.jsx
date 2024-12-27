import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Header({ darkMode, setDarkMode }) {
  const [openNav, setOpenNav] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode); // Toggle dark mode state
  };

  return (
    <div>
      <MDBNavbar expand='lg' light={!darkMode} dark={darkMode} bgColor={darkMode ? 'dark' : 'light'}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Portfolio</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNav(!openNav)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNav}>
            <MDBNavbarNav>
              <MDBNavbarItem>
                <Link className='nav-link' to='/Home'>Home</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='nav-link' to='/Projects'>Projects</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='nav-link' to='/Contact'>Contact</Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
            {/* This button will stay on the right due to ms-auto */}
            <div className="ms-auto">
              <button
                className={`btn btn-${darkMode ? 'light' : 'dark'}`}
                onClick={toggleTheme}
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Header;
