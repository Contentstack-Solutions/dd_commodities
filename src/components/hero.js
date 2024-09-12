"use client"
import { useEffect, useState } from "react"

export default function Hero(){
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setTimeout(() => {
            if(timer + 1 === 3)
                setTimer(0)
            else
                setTimer(timer + 1);
        }, 5000);
        return() => {
            clearTimeout(interval);
        }
    }, [timer])

    return(
        <div 
            className="relative max-w-8xl mx-auto px-8 overflow-visible bg-cover"
        >
            <img className="px-8 -z-10 " src="https://images.contentstack.io/v3/assets/blt8d1561b360c43524/bltc83a5af9e7a2c58d/66e2057d5b16d69166157808/mobile-header-home-img.png" />
            <img className={"absolute left-0 top-0 px-8 transition-opacity duration-200 ease-out " + (timer === 0 ? "opacity-100" : "opacity-0 ")} src="https://images.contentstack.io/v3/assets/blt8d1561b360c43524/blt6c5a7f5d9cf41d78/66e202217c4ba0ac1fb1d77f/DD_WebsiteHeader_3D-copy.png" />
            <img className={"absolute left-0 top-0 px-8 transition-opacity duration-200 ease-out " + (timer === 1 ? "opacity-100" : "opacity-0 ")} src="https://images.contentstack.io/v3/assets/blt8d1561b360c43524/blt05f1000647e0f1aa/66e20221d6385234e89c8583/DD_WebsiteHeader_BB-copy.png" />
            <img className={"absolute left-0 top-0 px-8 transition-opacity duration-200 ease-out " + (timer === 2 ? "opacity-100" : "opacity-0 ")} src="https://images.contentstack.io/v3/assets/blt8d1561b360c43524/bltb1a1047ee36b7cbb/66e20221dc63c470bbd1896f/DD_WebsiteHeader_WD-copy.png" />
        
        </div>
    )
}