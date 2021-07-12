import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({ start }) => {
    return (
        <Carousel fadeIn nextLabel prevLabel>
            {
                start.map((Item, index) => (
                    <Carousel.Item>
                        <img key={index}
                            className="d-block w-100"
                            src={Item}
                            alt="First slide"
                            interval={1000}
                        />
                    </Carousel.Item>
                ))}
        </Carousel>
    )
}

export default Slider
