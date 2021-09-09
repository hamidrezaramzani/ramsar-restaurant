import React from 'react'
import { Row } from 'react-bootstrap'
import Navbar from './Navbar';
import Welcome from './Welcome';
import styles from '../../styles/Home.module.css';

function Header() {
    return (
        <Row className={["justify-content-center", styles.header]} >
            <Navbar />
            <Welcome />
        </Row>
    )
}

export default Header
