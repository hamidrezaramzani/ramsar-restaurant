import Header from '../Components/Header/Header'
import Content from '../Components/Content/Content'
import Description from '../Components/Content/Description'
import RestaurantMenu from '../Components/Menus/Restaurant'
import CoffeShopMenu from '../Components/Menus/CoffeShopMenu'
import VideoTeaser from '../Components/VideoTeaser/VideoTeaser'
import ContactUs from '../Components/ContactUs/ContactUs'
import Footer from '../Components/Footer/Footer'
import CoffeeMotivate from '../Components/CoffeeMotivate/CoffeeMotivate'
import Head from 'next/head'
import OpeningHours from '../Components/OpeningHours/OpeningHours'
import Logos from '../Components/Logos/Logos'
export default function Home() {
    const coffeeData = {
        title : "کافی شاپ" , 
        description : "از برترین کافی شاپ های منطقه با انواع نوشیدنی های گرم و سرد که با بهترین کیفیت و بهترین دستگاه ها ساخته میشود و تقدیم مشتری میگردد" , 
        image : "/images/food4.jpg" , 
        buttonText : "منوی کافه" , 
        buttonLink : "/#coffee-menu" , 
        rtl : true
    }
    return (
        <>
            <Head>
                <title>وبسایت رستوران و کافی شاپ رامسر</title>
            </Head>
            <Header />
            <Content />
            <RestaurantMenu />
            <VideoTeaser />
            <Description {...coffeeData} />
            <CoffeeMotivate />
            <CoffeShopMenu />
            <ContactUs />
            <OpeningHours />
            <Logos />
            <Footer />
        </>
    )
}
