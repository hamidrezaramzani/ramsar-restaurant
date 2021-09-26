import React from 'react'
import Description from './Description'
function Content() {
    const data1 = {
        title : "درباره رستوران رامسر" , 
        description : "رستوران و کافی شاپ رامسر در سال 1398 با بهره گیری از کادری مجرب توانسته است تا یکی از پرطرفدار ترین رستوران های رامسر باشد. این رستوران با بهره گیری از سرویس دهی مناسب ، کیفیت خوب غذا و ویو خوب از شهر رامسر یکی از اولین انتخاب های رستوران در شهرستان رامسر باشد" , 
        image : "/images/food1.jpg" , 
        buttonText : "اطلاعات بیشتر" , 
        buttonLink : "/more-about-us"

    }

    const data2 = {
        title : "غذاهای محبوب ایرانی و فست فود" , 
        description : "در رستوران رامسر ما انواع غذاهای ایرانی را سرو میکنیم همینطور در بخش فست فود رستوران رامسر توانسته انواع غذاهای فست فودی را آماده کند" , 
        image : "/images/food2.jpg" , 
        buttonText : "منوی رستوران" , 
        buttonLink : "/#restaurant-menu"

    }
    return (
        <>
            <Description {...data1} />    
            <Description {...data2}  rtl={true} />    
        </> 
    )
}

export default Content
