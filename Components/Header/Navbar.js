import React, { useState , useEffect } from 'react'
import { Col } from 'react-bootstrap'
import {isMobile} from 'react-device-detect'
import styles from '../../styles/Home.module.css';
import { AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'
function Navbar() {
    const [state, setState] = useState(false)
    const clickHandler = () => {
        setState(!state);
    }
    useEffect(() => {
        if(!isMobile){
            setState(true)
        }else{
            setState(false)
        }
    },[]);

    return (
        <Col xs="12" md="12" className="px-md-5" style={{ zIndex: 4 , height: 0}}>
            <div className={state ? styles.openToggle : styles.toggle}>
                <button className="btn btn-sm btn-outline-light" onClick={clickHandler}>
                    <AiOutlineMenu />
                </button>
            </div>
            <div className={state ? styles.open : styles.close}>
                <ul className={[styles.navbar]}>

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

            </div>

        </Col>
    )
}

export default Navbar
