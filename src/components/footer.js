"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "@/lib/cstack";

export default function Footer(){
    const [entry, setEntry] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getContent = async () => {
        const entry = await Stack.getElementByTypeWtihRefs("footer", "en-us", [
            [
                'links.page'
            ]
        ]);
        console.log("footer", entry[0][0]);
        setEntry(entry[0][0]);
        setIsLoading(false);
    };

    useEffect(() => {
        onEntryChange(getContent);
    }, []);

    if (isLoading)
        return <div></div>

    return(
        <div className="bg-[#0054A0] w-full text-white">
            <div className="max-w-8xl mx-auto p-8">
                <div className="gap-8 flex justify-center font-assistant text-lg font-semibold">
                    {entry?.links.map((link, index) => (
                        <a key={index} href={link.page.length > 0 ? link.page[0].url : "#"}>{link.text}</a>
                    ))}
                </div>
                <p className="text-center text-sm mt-8 text-slate-200">{entry?.legal}</p>
            </div>
        </div>
    )
}