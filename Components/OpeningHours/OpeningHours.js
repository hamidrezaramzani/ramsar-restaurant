import React from 'react'
import {Row , Col} from 'react-bootstrap'
import {opening_hours} from '../../styles/Home.module.css'
function OpeningHours() {
    return (
        <Row className="justify-content-center p-5">
            <Col xs="12" md="7" className={opening_hours}>
                <h2>ساعات کاری</h2>
                <p>باز شدن از ساعت 8 صبح و تا ساعت 12 سفارش گرفته میشود.</p>
            </Col>
        </Row>
    )
}

export default OpeningHours
