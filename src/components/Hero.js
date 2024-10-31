import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

const hero = () => {
  return (
    <div className="hero min-vh-100 w-100" id='home'>
      <Container>
        <Row>
          <Col className="title">
          <h1 className='animate__animated animate__fadeIn animate__delay-1s'>Ngoding Santai Yuk!</h1>
          <p className='animate__animated animate__fadeInUp'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet incidunt nobis corrupti alias aut, non architecto, harum ab distinctio quos error delectus natus inventore rem pariatur aspernatur vel iste est similique quibusdam veniam molestias. In cum facere explicabo? Dolor eveniet recusandae ducimus vero excepturi voluptas totam aliquid incidunt blanditiis tempora, adipisci commodi inventore quas, est doloremque? Autem quaerat distinctio quibusdam quasi possimus a quisquam aliquam eius aut dicta. A sequi vitae veritatis fuga nemo! Numquam ad iste reprehenderit quis?</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default hero