import React from 'react'
import Description from './Description'
function Content() {
    const data1 = {
        title : "غذاهای محبوب ایرانی" , 
        description : "سرو تمامی غذا های محبوب ایرانی در دسته های مختلف  با بهترین کیفیت و در کمترین زمان." , 
        image : "/images/food1.jpg"
    }

    const data2 = {
        title : "غذاهای محبوب فست فودی" , 
        description : "سرو تمامی غذا های فست فودی در دسته های مختلف  با بهترین کیفیت و در کمترین زمان." , 
        image : "/images/food2.jpg"
    }
    return (
        <>
            <Description {...data1} />    
            <Description {...data2}  rtl={true} />    
        </> 
    )
}

export default Content
