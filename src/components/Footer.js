import React from 'react'
import { Container, Row, Col} from "react-bootstrap"

const Footer = () => {
  return (
    <div className='footer pb-3 pt-4'>
        <Container>
            <Row>
                <Col>
                <h3 className='fw-bold text-white fs-3 fs-md-3 mt-2'>Ngoding Santai</h3>
                </Col>
                <Col className='d-flex align-items-center justify-content-end'>
                <i class="fa-brands fa-facebook text-white fs-1 mx-1 mx-lg-3"></i>
                <i class="fa-brands fa-instagram text-white fs-1 mx-1 mx-lg-3"></i>
                <i class="fa-brands fa-x-twitter text-white fs-1 mx-1 mx-lg-3"></i>
                <i class="fa-brands fa-linkedin text-white fs-1 mx-1 mx-lg-3"></i>
                </Col>
            </Row>
            <Col>
                <p className='text-white-50 mt-3 text-center'>© 2024 - Made by Nxndi.</p>
            </Col>
        </Container>
    </div>
  )
}

export default Footer