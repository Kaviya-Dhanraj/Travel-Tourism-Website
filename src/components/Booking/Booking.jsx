import React,{useState} from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

import {useNavigate} from 'react-router-dom'




const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const Navigate = useNavigate()

  const[credentials,setCredentials] = useState({
    userId:'01',
    userEmail:'example@gmail.com',
    fullName:'',
    phone:'',
    guestSize:1,
    bookAt:''
  })

  const handleChange=e=>{
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
  };

  const serviceFee=10
  const totalAmount = Number(price)*Number(credentials.guestSize) + Number (serviceFee)

  const handleClick = e =>{
    e.preventDefault();
    // console.log(credentials);
    Navigate('/ThankYou');


  }
  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i class="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info_form" onSubmit={handleClick}>
          <FormGroup>
            <input type="text" name="" id="fullName" placeholder="Full Name"  required onChange={handleChange}/>
          </FormGroup>
          <FormGroup>
            <input type="number" name="" id="phone" placeholder="Phone"  required onChange={handleChange}/>
          </FormGroup>
          <FormGroup className='d-flex align-items-center gap-3'> 
            <input type="date" name="" id="bookAt" placeholder=""  required onChange={handleChange}/>
            <input type="number" name="" id="guestSize" placeholder="Guest"  required onChange={handleChange}/>
          </FormGroup>
        </Form>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className='border-0 px-0'> 
          <h5 className="d-flex align-items-center gap-1">${price} <i class="ri-close-line"> 1 person</i></h5>
          <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0'> 
          <h5>Service Charge</h5>
          <span>$10</span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0 total'> 
          <h5>Total</h5>
          <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
