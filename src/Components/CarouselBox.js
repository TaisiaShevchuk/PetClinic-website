import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import d1 from '../Components/foto/d1.jpg';
import r1 from '../Components/foto/r1.jpg';
import p from '../Components/foto/p.jpg';
import c2 from '../Components/foto/c2.jpg';
import c1 from '../Components/foto/c1.jpg';

export default class CarouselBox extends Component {
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= { d1 }
                        alt="Dog1"
                    />
                    <Carousel.Caption>
                        <h3>Dog image</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= { r1 }
                        alt="Dog1"
                    />
                    <Carousel.Caption>
                        <h3>Rabbit image</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= { p }
                        alt="Dog1"
                    />
                    <Carousel.Caption>
                        <h3>Guinea pigs image</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= { c2 }
                        alt="Dog1"
                    />
                    <Carousel.Caption>
                        <h3>Cat image</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= { c1 }
                        alt="Dog1"
                    />
                    <Carousel.Caption>
                        <h3>Cat image</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}