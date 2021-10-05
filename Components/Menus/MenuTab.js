import React from 'react'
import { TabPanel } from 'react-tabs';
import {Row} from 'react-bootstrap';
import FoodItem from './FoodItem'
function MenuTab() {
    return (
        <TabPanel>
            <Row className="justify-content-start">
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
            </Row>
        </TabPanel>
    )
}

export default MenuTab
