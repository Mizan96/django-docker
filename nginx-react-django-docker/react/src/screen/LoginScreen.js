import React from 'react'
import TopBar from '../components/TopBar'
import Bottom from '../components/Bottom'
import {Link} from 'react-router-dom' 
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBContainer,
} from 'mdb-react-ui-kit';
// import { Row } from 'react-bootstrap';

function LoginScreen() {
  return (
    <>
    <TopBar />
    <br></br>
    <MDBContainer>

    <MDBRow center>
      <MDBCol className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
        <h1 className='text-center'>লগইন</h1>
    <form>
      <MDBInput className='mb-4' type='text' id='form2Example1' label='User name' />
      <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' />

      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
        </MDBCol>
        <MDBCol>
          <a href='#!'>Forgot password?</a>
        </MDBCol>
      </MDBRow>

      <MDBBtn type='submit' className='mb-4' block>
        Sign in
      </MDBBtn>

      <div className='text-center'>
        
        <p>
        Not a member? <Link to='/register/'>Register</Link>
        </p> 
        
      </div>
    </form>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    <br></br>
    <Bottom />
    </>
  )
}

export default LoginScreen