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

export default function Home() {
    const [entry, setEntry] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getContent = async () => {
        const entry = await Stack.getElementByTypeWtihRefs(
            "homepage",
            "en-us",
            [
            ]
        );
        console.log('homepage', entry[0][0]);
        setEntry(entry[0][0]);
        setIsLoading(false);
    };

    useEffect(() => {
        onEntryChange(getContent);
    }, []);

    if (isLoading) return;

    return (
        <div>
            <Header />

            <Hero />
            {/* <TextAndImage /> */}
            <BrandBanner />
            <TextAndImage />

            {entry?.modular_blocks?.map((block, index) => {
                if(block.hasOwnProperty("marquee"))
                    return <Marquee key={index} content={block.marquee} />
                else if(block.hasOwnProperty("product_carousel"))
                    return <ProductCarousel key={index} content={block.product_carousel} />
            })}

            <Footer />
        </div>
    );
}
