import React from 'react'
import TopBar from '../components/TopBar'
import Bottom from '../components/Bottom'
import {Link} from 'react-router-dom' 
import {
    MDBInput,
    MDBCheckbox,
    MDBBtn, 
    MDBContainer,
    MDBCol,
    MDBRow
  } from 'mdb-react-ui-kit';

function ContactScreen() {
  return (
    <>
    <TopBar />
    <br></br>
    <MDBContainer>

    <MDBRow center>
      <MDBCol className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
        <h1 className='text-center'>বার্তা</h1>
        <form>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />
      <MDBBtn type='submit' className='mb-4' block>
        Sumbit
      </MDBBtn>
    </form>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    <br></br>
    <Bottom />
    </>
  )
}

export default ContactScreen