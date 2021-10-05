import { Row, Col, Container } from 'react-bootstrap'
import { FaInstagram, FaPhone } from 'react-icons/fa';
import { contact_us, contact_us_data } from '../../styles/Contact.module.css';
const ContactUs = () => {

    return <Container id="address">
        <Row className={["py-5 my-5", contact_us]}>
            <Col xs="12" md="6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.009807455204!2d50.67372135138942!3d36.8661840715828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8b0b710c2ce2f7%3A0x8f7e1b0570f835fc!2z2LHYs9iq2YjYsdin2YYg2LHYp9mF2LPYsQ!5e0!3m2!1sen!2s!4v1631348729766!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
            </Col>

            <Col xs="12" md="6" className={contact_us_data}>
                <h2>رستوران و کافی شاپ رامسر</h2>
                <p>آدرس : رامسر - ساداتشهر - اربکله - رستوران و کافی شاپ رامسر</p>

                <a href="" className="btn btn-sm ik btn-outline-dark d-flex align-items-center">
                    <FaInstagram className="mx-1" />ramsarrestaurant
                </a>

                <br />
                <a href="" className="mt-2 btn btn-sm ik btn-outline-dark d-flex align-items-center">
                    <FaPhone className="mx-1" /> 09300152714
                </a>
            </Col>
        </Row>
    </Container>
}

export default ContactUs;