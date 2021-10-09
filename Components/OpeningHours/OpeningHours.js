import React from 'react'
import {Row , Col} from 'react-bootstrap'
import {opening_hours} from '../../styles/Home.module.css'
function OpeningHours() {
    return (
        <Row className="justify-content-center p-5">
            <Col xs="12" md="7" className={opening_hours}>
                <h2>ساعات کاری</h2>
                <p>
                   8 صبح - 12:30 بامداد
                </p>
            </Col>
        </Row>
    )
}

export default OpeningHours
