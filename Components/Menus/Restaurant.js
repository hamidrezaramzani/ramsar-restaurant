import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { menus } from '../../styles/Menus.module.css';
import { FaFish, FaPizzaSlice } from 'react-icons/fa'
import { GiKebabSpit, GiOlive } from 'react-icons/gi'
import { BiDrink } from 'react-icons/bi'
import FoodItem from './FoodItem'
import EmptyList from './EmptyList';
import Slider from 'react-slick'
function Restaurant() {
    const data = [
        {
            title: "جوجه ترش",
            description: "300 گرم",
            price: 150000,
            image: "https://kalleh.com/book/wp-content/uploads/sites/2/2019/02/jojeh-kabab-cover.jpg",
            rate: 3
        },
        {
            title: "کباب ترش",
            description: "300 گرم گوشت گوساله",
            price: 125000,
            rate: 5,
            image: "https://media-cdn.tripadvisor.com/media/photo-s/0f/b5/01/df/sour-kebab.jpg"
        } , 
        {
            title: "جوجه ترش",
            description: "300 گرم",
            price: 150000,
            image: "https://kalleh.com/book/wp-content/uploads/sites/2/2019/02/jojeh-kabab-cover.jpg",
            rate: 3
        },
        {
            title: "کباب ترش",
            description: "300 گرم گوشت گوساله",
            price: 125000,
            rate: 5,
            image: "https://media-cdn.tripadvisor.com/media/photo-s/0f/b5/01/df/sour-kebab.jpg"
        } , 
        {
            title: "کباب ترش",
            description: "300 گرم گوشت گوساله",
            price: 125000,
            rate: 5,
            image: "https://media-cdn.tripadvisor.com/media/photo-s/0f/b5/01/df/sour-kebab.jpg"
        }, 
        {
            title: "جوجه ترش",
            description: "300 گرم",
            price: 150000,
            image: "https://kalleh.com/book/wp-content/uploads/sites/2/2019/02/jojeh-kabab-cover.jpg",
            rate: 3
        },
        {
            title: "کباب ترش",
            description: "300 گرم گوشت گوساله",
            price: 125000,
            rate: 5,
            image: "https://media-cdn.tripadvisor.com/media/photo-s/0f/b5/01/df/sour-kebab.jpg"
        } , 
        {
            title: "کباب ترش",
            description: "300 گرم گوشت گوساله",
            price: 125000,
            rate: 5,
            image: "https://media-cdn.tripadvisor.com/media/photo-s/0f/b5/01/df/sour-kebab.jpg"
        }
    ]

    const settings = {
        className: "centerSlider",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };

    function renderProducts() {
        return data.map((item, index) => (
            <FoodItem key={index} {...item} />
        ))
    }
    return (
        <Container className="py-5 my-5" id="restaurant-menu">
            <Row>
                <Col className={menus}>
                    <h2>منوی رستوران</h2>
                    <p>منوی به روز رستوران</p>
                    <Tabs>
                        <TabList>
                            <Tab>غذاهای ایرانی</Tab>
                            <Tab>فست فود</Tab>
                            <Tab>غذاهای دریایی</Tab>
                            <Tab>پیش غذاها</Tab>
                            <Tab>نوشیدنی ها</Tab>
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
                                <EmptyList image="/images/logo-restaurant.png" />
                            </Row>
                        </TabPanel>

                        <TabPanel>
                            <Row className="justify-content-start">
                                <EmptyList image="/images/logo-restaurant.png" />
                            </Row>
                        </TabPanel>

                        <TabPanel>
                            <Row className="justify-content-start">
                                <EmptyList image="/images/logo-restaurant.png" />
                            </Row>
                        </TabPanel>
                        <TabPanel>
                            <Row className="justify-content-start">
                                <EmptyList image="/images/logo-restaurant.png" />
                            </Row>
                        </TabPanel>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}

export default Restaurant
