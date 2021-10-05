import { Row, Col, Container } from 'react-bootstrap'
import { menus, food_item, food_item_price, food_item_content, food_item_data } from '../../styles/Menus.module.css';
import StarRatings from 'react-star-ratings';
import Link from 'next/link'
import { RiInformationFill } from 'react-icons/ri'
const FoodItem = (props) => {
    const selectStar = (rate) => {
        console.log(rate)
    }
    return (
        <Col xs="12" md="3" className={[food_item, "mb-5"]}>
            <div className={food_item_content}>
                <img src={props.image}  alt={props.title}/>
                <div className={food_item_data}>
                    <h4>{props.title}</h4>
                    <StarRatings
                        rating={props.rate}
                        starRatedColor="gold"
                        numberOfStars={5}
                        changeRating={selectStar}
                        name='rating'
                    />

                    <p>
                        {props.description}
                    </p>

                    <span>{props.price} تومان</span>
                </div>
            </div>
        </Col>
    )
}

export default FoodItem;