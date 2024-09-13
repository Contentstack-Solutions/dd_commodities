"use client"
import { useEffect, useState } from "react"

export default function Hero({ content }) {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setTimeout(() => {
            if (timer + 1 === 3)
                setTimer(0)
            else
                setTimer(timer + 1);
        }, 5000);
        return () => {
            clearTimeout(interval);
        }
    }, [timer])

    return (
        <div
            className="relative max-w-8xl mx-auto px-8 overflow-visible bg-cover"
        >
            <img className="px-8 -z-10 " src={content?.background_image?.url} />
            {content?.carousel_images?.map((image, index) => (
                <img key={index} className={"absolute left-0 top-0 px-8 transition-opacity duration-200 ease-out " + (timer === index ? "opacity-100" : "opacity-0 ")} src={image.image?.url} />
            ))}
        </div>
    )
}