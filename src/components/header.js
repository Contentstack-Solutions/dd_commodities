"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "@/lib/cstack";
import { UserIcon, MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function Header() {
    const [entry, setEntry] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getContent = async () => {
        const entry = await Stack.getElementByTypeWtihRefs("header", "en-us", [
            [
                'menu_items.items.page',
                'menu_items.page'
            ]
        ]);
        console.log("header", entry[0][0]);
        setEntry(entry[0][0]);
        setIsLoading(false);
    };

    useEffect(() => {
        onEntryChange(getContent);
    }, []);

    if (isLoading)
        return <div></div>

    return (
        <div className="h-20 w-full border-b shadow">
            <div className="relative max-w-8xl mx-auto px-8 flex h-20 items-center">
                <a href="/">
                    <img className="h-14 w-14" src={entry?.logo?.url} />
                </a>

                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center h-20 gap-10 font-assistant font-medium text-lg tracking-wide">
                        {entry?.menu_items?.map((item, index) => {
                            if (item.items?.length > 0) {
                                return (
                                    <Menu key={index}>
                                        <div key={index}>
                                            <MenuButton key={index} className="inline-flex items-center text-nowrap">
                                                {item.text}
                                                <ChevronDownIcon className="size-4 fill-white/60" />
                                            </MenuButton>

                                            <MenuItems
                                                transition
                                                anchor="bottom end"
                                                className="min-w-52  border bg-white p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                                            >
                                                {item.items?.map((subItem, subIndex) => (
                                                    <MenuItem key={subIndex}>
                                                        <a href={subItem.page.length > 0 ? subItem.page[0].url : "#"} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                                            {subItem.text}
                                                        </a>
                                                    </MenuItem>
                                                ))}
                                            </MenuItems>
                                        </div>
                                    </Menu>
                                )
                            }
                            else
                                return (
                                    <a key={index} href={item.page.length > 0 ? item.page[0].url : "#"} className="text-nowrap hidden lg:flex">
                                        {item.text}
                                    </a>
                                )
                        })}
                    </div>

                </div>

                <div className="flex items-center ml-auto gap-5">
                    <MagnifyingGlassIcon className="h-7 w-7" />
                    <UserIcon className="h-7 w-7" />
                </div>
            </div>
        </div>
    )
}