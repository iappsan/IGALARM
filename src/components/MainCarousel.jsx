import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

import img1 from '../img/casa.jpeg';
import img2 from '../img/arduino.jpg';
import img3 from '../img/seguridad.jpg';

export default function MainCarousel() {
    return (
        <div>
            <Container fluid>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                            fluid    
                        />
                        <Carousel.Caption>
                            <h1>First slide label</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                            fluid
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                            fluid
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}