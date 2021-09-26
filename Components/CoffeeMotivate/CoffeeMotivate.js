import React from 'react'
import {Container, Col , Row} from 'react-bootstrap'
import {motivate_box , description_motivate_box , image_motivate_box} from '../../styles/Home.module.css';
function CoffeeMotivate() {
    return (
        <Container>
            <Row className="justify-content-center my-5 py-5">
                <Col xs="12" md="11" className={motivate_box}>
                    <div className={image_motivate_box}>
                        <img src="/images/cappuccino.jpg" alt="coffee fake image" />
                    </div>
                    <div className={description_motivate_box}>

                        <h3>بهترین کاپوچینوی شهر را امتحان کنید!</h3>
                        <p>
                            با بهره گیری از بهترین دستگاه و باریستای مجهز توانستیم کیفیت محصولاتمان را ببریم و شما میتوانید در زیباترین جای شهر یک تجربه زیبا را از این لحظات داشته باشید
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CoffeeMotivate
