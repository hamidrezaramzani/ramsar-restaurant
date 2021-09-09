import React from 'react'
import { Col } from 'react-bootstrap'
import styles from '../../styles/Home.module.css';
function Navbar() {
    return (
        <Col xs="12" md="12" className="px-5" style={{ zIndex: 2 }}>
            <ul className={styles.navbar}>

                <li>
                    <a href="/home">غذاهای ایرانی
                    </a>
                </li>


                <li>
                    <a href="/home">
                        فست فود
                    </a>
                </li>


                <li>
                    <a href="/home">پیش غذاها
                    </a>
                </li>

                <li>
                    <a href="/home">درباره ما</a>
                </li>
                <li>
                    <a href="/home">صفحه اصلی</a>
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
