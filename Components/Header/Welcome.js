import React from 'react'
import { BiRestaurant } from 'react-icons/bi'
import { AiOutlineCoffee } from 'react-icons/ai'
import { ButtonGroup, Button } from 'react-bootstrap'
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router'
function Welcome() {
    const router = useRouter();
    function goTo(link) {
        router.push(link);
    }
    return (
        <div className={styles.welcome}>
            <span>خوش آمدید</span>
            <h1>رستوران و کافی شاپ رامسر</h1>
            <ButtonGroup>
                <Button variant="light" onClick={() => goTo("/#restaurant-menu")}>
                    منوی رستوران
                    <BiRestaurant />
                </Button>
                <Button variant="light" onClick={() => goTo("/#coffe-shop-menu")}>
                    منوی کافی شاپ
                    <AiOutlineCoffee />
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default Welcome
