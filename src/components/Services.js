import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

const services = () => {
  return (
    <div className='services min-vh-100 d-flex align-items-center' id='services'>
        <Container>
            <Row className='mb-4'>
                <Col>
                    <h2 className='text-center fw-bold' data-aos="fade-up">Services</h2>
                    <p className='text-center' data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet.</p>
                </Col>
            </Row>
            <Row className='row-cols-lg-4 row-cols-md-2 row-cols-1'>
                <Col className='text-center py-5 px-3 border bg-light' data-aos="fade-right">
                <i class="fa-solid fa-coins fs-1 mb-3"></i>
                <h5 className='fw-bold'>Harga Terjangkau</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Col>

                <Col className='text-center py-5 px-3 border bg-light' data-aos="fade-left" data-aos-delay="200">
                <i class="fa-regular fa-thumbs-up fs-1 mb-3"></i>
                <h5 className='fw-bold'>Kualitas Terbaik</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Col>

                <Col className='text-center py-5 px-3 border bg-light' data-aos="fade-right" data-aos-delay="400">
                <i class="fa-solid fa-feather fs-1 mb-3"></i>
                <h5 className='fw-bold'>Responsive</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Col>

                <Col className='text-center py-5 px-3 border bg-light' data-aos="fade-left" data-aos-delay="600">
                <i class="fa-solid fa-shield-halved fs-1 mb-3"></i>
                <h5 className='fw-bold'>Terverifikasi</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Col>
                
            </Row>
        </Container>
    </div>
  )
}

export default services