import React, { useState } from 'react'
import { Container, Row, Col, Form,FormGroup,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css'



import loginImg from'../assets/images/login.png'
import userIcon from'../assets/images/user.png'

const Login = () => {

  const[credentials , setCredentials] = useState({
    email:undefined,
    password:undefined,
    
  });
  const handleClick = e =>{
    e.preventDefault();
    console.log(credentials);
  }

  const handlechange = e => {
    setCredentials(prev => ({ ...prev,[e.target.id]:e.target.value}));
  };
  

  
  return <section>
    <Container>
      <Row>
        <Col lg='8'className='m-auto'>
          <div className="login__container d-flex justify-content-between">
            <div className='login__img'>
              <img src={loginImg} alt=''/>
              </div>

              <div className='login__form'>
                <div className="user">
                  <img src={userIcon} alt=''/>
                </div>
                <h2>Login</h2>
                <br />
                <Form onSumbit={handleClick}>
                  <FormGroup>
                  <input type='text' placeholder='Username'requiredId='Username'onChange={handlechange}    style={{ textAlign: 'center' }}/>
                  </FormGroup>
                  <FormGroup>
                    <input type='password' placeholder='Password'requiredId='password'onChange={handlechange}    style={{ textAlign: 'center' }}/>
                  </FormGroup>
                  <br />
                  <Button className='btn secondary__btn auth__btn'type='submit'>login</Button>
                </Form>
                <br />
                <p>Don't have an account?<Link to='/register'> create </Link></p>
              </div>
              </div>
            
        </Col>
      </Row>
    </Container>
  </section>
  };
    
  


export default Login;