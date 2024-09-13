"use client";
import { useEffect } from "react"
import ContentstackLivePreview from "@contentstack/live-preview-utils"
export default function LivePreviewInitComponent() {
    useEffect(() => {
        ContentstackLivePreview.init({
            stackSdk: Stack,
            clientUrlParams: {
                protocol: "https",
                host: process.env.CONTENTSTACK_REGION == 'NA' ? "app.contentstack.com" : "eu-app.contentstack.com",
                port: 443,
            }
        });
    }, []);
    return (<></>);
}