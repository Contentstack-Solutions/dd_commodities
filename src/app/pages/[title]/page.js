"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "@/lib/cstack";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import TextAndImage from "@/components/textAndImage";
import ProductCarousel from "@/components/productCarousel";
import Marquee from "@/components/marquee";

export default function Page({ params }) {
    const [entry, setEntry] = useState({});

    const getContent = async () => {
        const entry = await Stack.getElementByUrlWithRefs("page", "/pages/" + params.title, "en-us",
            [
                'hero',
                'modular_blocks.brand_banner.items.page',
                'modular_blocks.text_and_image.page'
            ]
        );
        console.log("page", entry);
        setEntry(entry);
    };

    useEffect(() => {
        onEntryChange(getContent);
    }, []);

    return (
        <div>
            <Header />

            {entry?.hero?.length > 0 &&
                <Hero content={entry?.hero[0]}/>
            }

            {entry?.modular_blocks?.map((block, index) => {
                if (block.hasOwnProperty("marquee"))
                    return <Marquee key={index} content={block.marquee} />
                else if (block.hasOwnProperty("product_carousel"))
                    return <ProductCarousel key={index} content={block.product_carousel} />
                else if (block.hasOwnProperty("text_and_image"))
                    return <TextAndImage key={index} content={block.text_and_image} />
                else if (block.hasOwnProperty("text_block"))
                    return (
                        <div
                            key={index}
                            className="max-w-8xl mx-auto px-8 whitespace-pre-wrap [&_ul]:list-disc my-12"
                            dangerouslySetInnerHTML={{ __html: block.text_block?.body }}
                        ></div>
                    )
            })}

            <Footer />
        </div>
    )
}