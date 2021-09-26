import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {menus , food_item, food_item_price , food_item_content , food_item_data} from '../../styles/Menus.module.css';
import {FaFish , FaPizzaSlice , FaIceCream , FaCocktail} from 'react-icons/fa'
import {GiKebabSpit , GiOlive} from 'react-icons/gi'
import {AiOutlineCoffee} from 'react-icons/ai'
import {BiDrink} from 'react-icons/bi'
import FoodItem from './FoodItem'
function CoffeShopMenu() {
    return (
        <Container className="py-5"  id="restaurant-menu">
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
                                <FoodItem />                                                    
                                <FoodItem />                                                    
                                <FoodItem />                                                    
                                <FoodItem />                                                    
                                <FoodItem />                                                    
                                <FoodItem />                                                    
                                <FoodItem />                                                    
                            </Row>
                        </TabPanel>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}

export default CoffeShopMenu
