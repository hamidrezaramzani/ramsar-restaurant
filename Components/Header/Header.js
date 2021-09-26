import React from 'react'
import { Row } from 'react-bootstrap'
import Navbar from './Navbar';
import Welcome from './Welcome';
import styles from '../../styles/Home.module.css';
import Link from 'next/link'
import {FaArrowDown} from 'react-icons/fa'
function Header() {
    return (
        <Row className={["justify-content-center", styles.header]} >
            <Navbar />
            <Welcome />
            <Link href="/home" >
                <a className={styles.arrow}><FaArrowDown /></a>
            </Link>
        </Row>
    )
}

export default Header
