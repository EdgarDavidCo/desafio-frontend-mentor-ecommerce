

import imgProductSmall1 from '@/assets/images/image-product-1-thumbnail.jpg'
import imgProductSmall2 from '@/assets/images/image-product-2-thumbnail.jpg'
import imgProductSmall3 from '@/assets/images/image-product-3-thumbnail.jpg'
import imgProductSmall4 from '@/assets/images/image-product-4-thumbnail.jpg'
import PreviIcon from '@/components/icons/PreviIcon';
import NextIcon from '@/components/icons/NextIcon';
import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";
import { useState } from 'react';

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4]



const SlideProduct = () => {
    const [index, setIndex] = useState(0)

    const handleClickNext = () => {
        (index === ARRAY_IMGS.length - 1) ? setIndex(0) : setIndex(index + 1);
        
    }
    const handleClickPrev = () => {
        (index === 0) ? setIndex(ARRAY_IMGS.length - 1) : setIndex(index - 1);
        
    }
    return (
        <section className="grid md:grid-cols-4 md:gap-6">
            <div className='relative col-span-4'>
                <img src={ARRAY_IMGS[index]} alt="" className="aspect-[16/12]" />
                <div className="absolute top-1/2 left-0 flex w-full justify-between -translate-y-1/2 px-4">
                    <button className='grid h-10 w-10 rounded-full place-items-center bg-white' onClick={handleClickPrev}>
                        <PreviIcon />
                    </button>
                    <button className='grid h-10 w-10 rounded-full place-items-center bg-white' onClick={handleClickNext}>
                        <NextIcon />
                    </button>
                </div>
            </div>
            <img src={imgProductSmall1} alt="" className='hidden md:block' />
            <img src={imgProductSmall2} alt="" className='hidden md:block' />
            <img src={imgProductSmall3} alt="" className='hidden md:block' />
            <img src={imgProductSmall4} alt="" className='hidden md:block' />

        </section>
    )
}

export default SlideProduct;