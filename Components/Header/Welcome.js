import React from 'react'
import { BiRestaurant } from 'react-icons/bi'
import { AiOutlineCoffee } from 'react-icons/ai'
import { ButtonGroup, Button } from 'react-bootstrap'
import styles from '../../styles/Home.module.css';
function Welcome() {
    return (
        <div className={styles.welcome}>
            <span>خوش آمدید</span>
            <h1>رستوران و کافی شاپ رامسر</h1>
            <ButtonGroup >
                <Button variant="light">
                    منوی رستوران
                    <BiRestaurant />
                </Button>
                <Button variant="light">منوی کافی شاپ
                    <AiOutlineCoffee />
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default Welcome
