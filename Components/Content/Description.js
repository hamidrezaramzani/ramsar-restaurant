import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { image, content_data, content_header_effect } from '../../styles/Home.module.css'
function Description(props) {
    return (
        <Container>
            <Row className="py-5 mb-5">

                <Col xs="12" md="6" className={[image , props.rtl ? "order-2" : "order-1"]}>
                    <img src={props.image} width="500" height="500" />
                </Col>
                
                <Col xs="12" md="6" className={[content_data,  props.rtl ? "order-1" : "order-2"]}>
                    <h2>
                        {props.title}
                    </h2>
                    <p>{props.description}</p>                   
                </Col>



            </Row>
        </Container>
    )
}

export default Description
