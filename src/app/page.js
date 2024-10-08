"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "@/lib/cstack";
import BrandBanner from "@/components/brandBanner";
import Header from "@/components/header";
import Hero from "@/components/hero";
import TextAndImage from "@/components/textAndImage";
import Marquee from "@/components/marquee";
import ProductCarousel from "@/components/productCarousel";
import Footer from "@/components/footer";
//import dynamic from 'next/dynamic';
//const LivePreviewInit = dynamic( () => import("@/components/LivePreviewInit").then((mod) => mod.default), { ssr: false } );

export default function Home() {
    const [entry, setEntry] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getContent = async () => {
        const entry = await Stack.getElementByTypeWtihRefs("homepage", "en-us",
            [
                'hero',
                'modular_blocks.brand_banner.items.page',
                'modular_blocks.text_and_image.page'
            ]
        );
        console.log('homepage', entry[0][0]);
        setEntry(entry[0][0]);
        setIsLoading(false);
    };

    useEffect(() => {
        //getContent();
        onEntryChange(getContent);
    }, []);

    if (isLoading) return;

    return (
        <div>
            <Header />
            {entry?.hero?.length > 0 &&
                <Hero content={entry?.hero[0]}/>
            }

            {entry?.modular_blocks?.map((block, index) => {
                if(block.hasOwnProperty("marquee"))
                    return <Marquee key={index} content={block.marquee} />
                else if(block.hasOwnProperty("product_carousel"))
                    return <ProductCarousel key={index} content={block.product_carousel} />
                else if(block.hasOwnProperty("brand_banner"))
                    return <BrandBanner key={index} content={block.brand_banner} />
                else if(block.hasOwnProperty("text_and_image"))
                    return <TextAndImage key={index} content={block.text_and_image} />
            })}

            <Footer />
        </div>
    );
}
