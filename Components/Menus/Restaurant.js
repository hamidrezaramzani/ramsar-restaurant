import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {menus , food_item, food_item_price , food_item_content , food_item_data} from '../../styles/Menus.module.css';
import {FaFish , FaPizzaSlice} from 'react-icons/fa'
import {GiKebabSpit , GiOlive} from 'react-icons/gi'
import {BiDrink} from 'react-icons/bi'
import FoodItem from './FoodItem'
function Restaurant() {
    return (
        <Container className="py-5 my-5" id="restaurant-menu">
            <Row>
                <Col className={menus}>
                <h2>منوی رستوران</h2>
                <p>منوی به روز رستوران</p>
                    <Tabs>
                        <TabList>
                             <Tab><GiKebabSpit />غذاهای ایرانی</Tab>
                            <Tab><FaPizzaSlice />فست فود</Tab>
                            <Tab><FaFish />غذاهای دریایی</Tab>
                            <Tab><GiOlive />پیش غذاها</Tab>
                            <Tab><BiDrink />نوشیدنی ها</Tab>    
                        </TabList>

                        <TabPanel>
                            <Row className="justify-content-start">
                                <FoodItem />                                                    
                                <FoodItem />                                                    
                                <FoodItem />                                                       
                                <FoodItem />                                                    
                                <FoodItem />                                                    
                                <FoodItem />                                                    
                                <FoodItem />                                                    
                            </Row>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}

export default Restaurant
