import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Dog from '../images/dog.webp'
import Cat from '../images/cat.webp'
import Chameleon from '../images/chameleon.webp'
import '../style/componentStyle/slider/SliderStyle.css'

const Slider = () => {
  return (
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        interval={5000}
        transitionTime={1000}
        showIndicators={true}
        swipeable={true}
      >
        <div className="carousel-item">
          <img src={Dog} alt="carousel item 1" />
          <div className="carousel-item-content description1">
            <h1>Veterinaria Huellitas</h1>
            <p>Descripción del slide</p>
            <button>Comprar ahora</button>
          </div>
        </div>
        <div className="carousel-item ">
          <img src={Cat} alt="carousel item 2 " />
          <div className="carousel-item-content description2">
            <h1>Veterinaria Huellitas</h1>
            <p>Haz que crezca fuerte y saludable.</p>
            <button>Comprar ahora</button>
          </div>
        </div>
        <div className="carousel-item ">
          <img src={Chameleon} alt="carousel item 3 " />
          <div className="carousel-item-content description3">
            <h1 className='titulo'>Veterinaria Huellitas</h1>
            <p className='sentence'>Nos ocupamos del bienestar de tu mascota</p>
            <button className='button'>Comprar ahora</button>
          </div>
        </div>
      </Carousel>
    );
};

export default Slider