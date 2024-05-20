import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'


const Home = () => {
  return (

    <Container>
    <Row>
        <Col>

<div className='next'>
<h1 className='h1'> <strong>Choose a plan for your next project</strong></h1>
<p className='p'> You have Free Unlimited Updates and Premium<br></br> Support on each
packagee. You also have 20 <br></br> to request a refund.</p>

<Button variant='danger'style={{borderRadius:'5px'}}><b>FREELANCER </b></Button>{' '}
<Button variant='light' style={{borderRadius:'5px'}}><b>ENTERPRISE</b> </Button>{' '}
</div>
        </Col>


        {/* Price Chat */}
        <Col>
            <div className='cards'>
        <div className='cardinner'>
        <br></br>
      <h5 style={{fontSize: '17px',marginTop: '5px'}}><b> Standard </b></h5>  
      <hr />
      <h1 style={{fontSize: '50px',marginTop: '5px'}}><b> $25 </b></h1>  
      <h5 style={{fontSize: '17px',marginTop: '5px'}}> Per month </h5> 

      <h5 style={{fontSize: '15px',marginTop: '5px',}}><b style={{color:'rgb(0, 162, 255)'}}> 20gb </b> File Storage</h5>  
      <h5 style={{fontSize: '15px',marginTop: '5px'}}><b style={{color:'rgb(0, 162, 255)'}}> 15gb </b> User/project</h5>
      <h5 style={{fontSize: '15px',marginTop: '5px'}}><b style={{color:'rgb(0, 162, 255)'}}> 4.000</b> Internal messages</h5>    
      
      <hr />

      <h5 style={{fontSize: '17px',marginTop: '5px',color:'rgb(0, 162, 255)'}}> Request a demo</h5> 
        </div>
        </div>
                </Col>

{/* Price Chat */}
<Col >
            <div className='cards'>
        <div className='cardinner'>
        <br></br>
      <h5 style={{fontSize: '17px',marginTop: '5px'}}><b> Premium</b></h5>  
      <hr />
      <h1 style={{fontSize: '50px',marginTop: '5px'}}><b> $59 </b></h1>  
      <h5 style={{fontSize: '17px',marginTop: '5px'}}> Per month </h5> 

      <h5 style={{fontSize: '15px',marginTop: '5px',}}><b style={{color:'rgb(0, 162, 255)'}}> 50gb </b> File Storage</h5>  
      <h5 style={{fontSize: '15px',marginTop: '5px'}}><b style={{color:'rgb(0, 162, 255)'}}> 100gb </b> Users</h5>
      <h5 style={{fontSize: '15px',marginTop: '5px'}}><b style={{color:'rgb(0, 162, 255)'}}> Premium</b> Support</h5>    
      
      <hr />

      <h5 style={{fontSize: '17px',marginTop: '5px',color:'rgb(0, 162, 255)'}}>Request a demo </h5> 
        </div>
        </div>
                </Col>


    </Row>
    </Container>
  )
}

export default Home
