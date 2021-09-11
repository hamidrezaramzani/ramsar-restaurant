import Header from '../Components/Header/Header'
import Content from '../Components/Content/Content'
import RestaurantMenu from '../Components/Menus/Restaurant'
import Head from 'next/head'
export default function Home() {
    return (
        <>
            <Head>
                <title>وبسایت رستوران و کافی شاپ رامسر</title>
            </Head>
            <Header />
            <Content />
            <RestaurantMenu />
        </>
    )
}
