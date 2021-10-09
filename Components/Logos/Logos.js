import React from 'react'
import { logos } from '../../styles/Home.module.css'
function Logos() {
    return (
        <div className={logos}>
            <a href="https://instagram.com/unicoffe">
                <img src="/images/logo-coffe.png" width="125`" height="125" alt="coffe logo" />
            </a>

            <a href="https://instagram.com/ramsarrestaurant">
                <img src="/images/logo-restaurant.png" width="125" height="125" alt="coffe logo" />
            </a>
        </div>
    )
}

export default Logos
