import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from "reactstrap";
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png'

const servicesData = [
  {
    imgUrl:weatherImg ,
    title:"Calculate Weather",
    desc: "Forecasting your adventures, one click at a time. Discover accurate weather predictions on our website."
  },
  {
    imgUrl:guideImg ,
    title:"Best Tour Guide",
    desc: "Unlocking the secrets of every destination, guiding your journey with expertise and passion."
  },
  {
    imgUrl:customizationImg ,
    title:"Customization",
    desc: "Tailored adventures, personalized memories – let's craft your perfect journey together"
  }
]
const ServiceList = () => {
  return <>
  {
    servicesData.map((item,index)=>
    <Col lg='3' key={index}><ServiceCard item={item} /></Col>
    )
  }
  </>
}

export default ServiceList