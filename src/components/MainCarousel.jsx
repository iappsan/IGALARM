import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../img/casa.jpg';
import img2 from '../img/arduino.jpg';
import img3 from '../img/seguridad.jpg';

export default function MainCarousel() {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="carouselHead">La seguridad de tu hogar</h1>
                        <p className="carouselP">Ten la tranquilidad de que todo está bien</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="carouselHead">Sistema basado en arduino</h1>
                        <p className="carouselP">Circuitería de calidad a un precio accesible .</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="carouselHead">Notifica desde la web</h1>
                        <p className="carouselP">Ten el control desde cualquier parte del mundo, solo conectandote a internet.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}