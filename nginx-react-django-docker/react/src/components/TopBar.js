import AboveTop from "./AboveTop";
import { LinkContainer } from "react-router-bootstrap";
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';

function TopBar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <MDBNavbar expand='lg' sticky light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse className="justify-content-center" navbar open={openNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <LinkContainer to="/">
              <MDBNavbarLink>সর্বশেষ</MDBNavbarLink>
              </LinkContainer>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <LinkContainer to="/news/বাংলাদেশ/">
              <MDBNavbarLink>বাংলাদেশ</MDBNavbarLink>
              </LinkContainer>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <LinkContainer to="/news/অর্থনীতি/">
              <MDBNavbarLink>অর্থনীতি</MDBNavbarLink>
            </LinkContainer>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <LinkContainer to="/news/বিশ্ব/">
              <MDBNavbarLink>বিশ্ব</MDBNavbarLink>
            </LinkContainer>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <LinkContainer to="/news/মতামত/">
              <MDBNavbarLink>মতামত</MDBNavbarLink>
            </LinkContainer>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
        </MDBCollapse>

        {/* This is login menu */}
        <MDBCollapse className="justify-content-end"  navbar open={openNav}>
        <MDBNavbarNav>
        <MDBNavbarItem>
            <LinkContainer to="/contact/">
              <MDBNavbarLink><i class="fa-solid fa-message"></i> যোগাযোগ</MDBNavbarLink>
            </LinkContainer>
            </MDBNavbarItem>
        <MDBNavbarItem>
            <LinkContainer to="/login/">
              <MDBNavbarLink><i class="fa-solid fa-right-to-bracket"></i> লগইন</MDBNavbarLink>
            </LinkContainer>
            </MDBNavbarItem>
        </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    
    
   
      <AboveTop />
    </>
  );
}

export default TopBar;
