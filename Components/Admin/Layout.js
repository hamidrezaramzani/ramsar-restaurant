import React from 'react'
import withSession from '../../lib/session'
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

export const getServerSideProps = withSession(async function ({ req, res }) {
    const user = req.session.get('user')
    if (!user) {
        return {
            redirect: {
                destination: '/admin/login',
                permanent: false,
            },
        }
    }

    return {
        props: { user: req.session.get('user') },
    }
})

export default Layout
