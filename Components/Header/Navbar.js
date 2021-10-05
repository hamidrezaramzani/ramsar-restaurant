import React from 'react'
import { Col } from 'react-bootstrap'
import styles from '../../styles/Home.module.css';
import Link from 'next/link'
function Navbar() {
    return (
        <Col xs="12" md="12" className="px-5" style={{ zIndex: 2 }}>
            <ul className={styles.navbar}>

                <li>
                    <Link href="/">درباره ما</Link>
                </li>

                <li>
                    <Link href="/#address">آدرس
                    </Link>
                </li>


                <li>
                    <Link href="/#restaurant-menu">
                        منوی رستوران
                    </Link>
                </li>


                <li>
                    <Link href="/#coffe-shop-menu">منوی کافی شاپ
                    </Link>
                </li>


                <li>
                    <Link href="/">صفحه اصلی</Link>
                </li>



            </ul>
        </Col>
    )
}
/**
 * مبانی ساختمان گسسته
 * زبان فنی - یک و نیم تا سه و نیم
 * طراحی وب - سه و نیم تا 
 * ریاضی عمومی
 * پایگاه داده - یازده و نیم
 * برنامه نویس موبایل 1 - 7.30 تا 11.30
 */
export default Navbar
