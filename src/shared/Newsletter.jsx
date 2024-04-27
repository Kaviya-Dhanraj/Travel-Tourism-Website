import React from 'react'
import './newsletter.css'
import { Container,Row,Col } from 'reactstrap'
import MaleTourist from '../assets/images/male-tourist.png'


const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="newsletter__content">
            <h2>Subscribe now to get useful traveling information</h2>

            <div className="newsletter__input">
              <input type="email" placeholder='Enter your email' />
              <button className="btn newsletter__btn">Subscribe</button>
            </div>
            

            <p>Subscribe now to unlock exclusive access to our latest travel deals and special offers. Join our community and be the first to receive exciting discounts and promotions straight to your inbox!</p>
          </div>
        </Col>
        <Col lg='6'>
          <div className="newsletter__img">
            <img src={MaleTourist} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Newsletter;