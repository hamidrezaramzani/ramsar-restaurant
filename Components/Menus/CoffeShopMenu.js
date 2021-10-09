import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { menus } from '../../styles/Menus.module.css';
import { FaIceCream, FaCocktail } from 'react-icons/fa'
import { AiOutlineCoffee } from 'react-icons/ai'
import { BiDrink } from 'react-icons/bi'
import FoodItem from './FoodItem'
import EmptyList from './EmptyList';
import Slider from 'react-slick'
function CoffeShopMenu() {
    const data = [
        {
            title: "شیک کره بادام زمینی",
            description: "کره بادام زمینی - شیر - بستنی",
            price: 40000,
            image: "https://mag.foodism.app/wp-content/uploads/2020/04/fa2e6f295f11afc7553b13d8fdd91ed7.jpg",
            rate: 4.5
        },
        {
            title: "شیک نوتلا",
            description: "نوتلا - بستنی -  شیر",
            price: 40000,
            image: "https://www.parsine.com/files/fa/news/1400/2/30/1361350_532.jpg",
            rate: 3
        },
        {
            title: "شیک نوتلا",
            description: "نوتلا - بستنی -  شیر",
            price: 40000,
            image: "https://www.parsine.com/files/fa/news/1400/2/30/1361350_532.jpg",
            rate: 3
        }
        ,
        {
            title: "شیک نوتلا",
            description: "نوتلا - بستنی -  شیر",
            price: 40000,
            image: "https://www.parsine.com/files/fa/news/1400/2/30/1361350_532.jpg",
            rate: 3
        }
    ]

    const settings = {
        className: "centerSlider",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500 , 
        swipeToSlide : true
    };


    function renderProducts() {
        return data.map((item, index) => (
            <FoodItem key={index} {...item} />
        ))
    }
    return (
        <Container className="py-5" id="coffe-shop-menu">
            <Row>
                <Col className={menus}>
                    <h2>منوی کافی شاپ</h2>
                    <p>منوی به روز کافی شاپ را از اینجا مشاهده کنید</p>
                    <Tabs>
                        <TabList>
                            <Tab><FaIceCream />شیک و بستنی</Tab>
                            <Tab><FaCocktail />موکتل</Tab>
                            <Tab><AiOutlineCoffee />قهوه</Tab>
                        </TabList>

                        <TabPanel>
                            <Row className="justify-content-start">
                                <Slider {...settings}>
                                    {renderProducts()}
                                </Slider>
                            </Row>
                        </TabPanel>

                        <TabPanel>
                            <Row className="justify-content-start">
                                <EmptyList image="/images/logo-coffe.png" />
                            </Row>
                        </TabPanel>

                        <TabPanel>
                            <Row className="justify-content-start">
                                <EmptyList image="/images/logo-coffe.png" />
                            </Row>
                        </TabPanel>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}

export default CoffeShopMenu
