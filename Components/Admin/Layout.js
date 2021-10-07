import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'
import Sidebar from '../../Components/Admin/Sidebar'
function Layout(props) {
    return (
        <Container>
            <Row className="justify-content-center p-md-5">
                <Col xs="12" md="9">{props.children}</Col>
                <Sidebar />
            </Row>
        </Container>
    )
}

export default Layout
