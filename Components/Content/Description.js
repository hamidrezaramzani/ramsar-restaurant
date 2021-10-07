import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { image, content_data } from '../../styles/Home.module.css'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css';
function Description(props) {
    React.useEffect(() => {
        AOS.init({
            duration : "1000"
        });
    } , []);
    return (
        <Container >
            <Row className="py-5 mt-5">

                <Col xs="12" data-aos="flip-right" md="6" className={[image , props.rtl ? "order-1" : "order-1"]}>
                    <img   src={props.image} width="500" height="500" />
                </Col>
                
                <Col xs="12" data-aos="fade-top"  md="6" className={[content_data,  props.rtl ? "order-1" : "order-1"]}>
                    <h2>
                        {props.title}
                    </h2>
                    <p>{props.description}</p>

                    <Link  href={props.buttonLink}>
                        <a className="btn btn-sm btn-outline-secondary ik">{props.buttonText}</a>    
                    </Link>                   
                </Col>



            </Row>
        </Container>
    )
}

export default Description
