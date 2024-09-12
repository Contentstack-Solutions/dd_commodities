"use client"
import { UserIcon, MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function Header() {
    return (
        <div className="h-20 w-full border-b shadow">
            <div className="relative max-w-8xl mx-auto px-8 flex h-20 items-center">
                <img className="h-14 w-14" src="https://images.contentstack.io/v3/assets/blt8d1561b360c43524/bltce1cdf564aeb77da/66e1d86ed6385252cf9c82f4/dd.png" />

                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center h-20 gap-10 font-assistant font-medium text-lg tracking-wide">
                        <Menu >
                            <MenuButton className="inline-flex items-center text-nowrap">
                                OUR BRANDS
                                <ChevronDownIcon className="size-4 fill-white/60" />
                            </MenuButton>

                            <MenuItems
                                transition
                                anchor="bottom end"
                                className="min-w-52 origin-top-right  border bg-white p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                            >
                                <MenuItem>
                                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                        Wild Delight®
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                        3-D® Pet Products
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                        Better Bird®
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                        L&apos;Avian Plus™
                                    </button>
                                </MenuItem>
                            </MenuItems>

                            <a href="#" className="text-nowrap hidden lg:flex">
                                ABOUT US
                            </a>
                            <a href="#" className="hidden lg:flex">MARKETING</a>
                            <a href="#" className="hidden lg:flex">RETAILERS</a>
                            <a href="#" className="hidden lg:flex">CAREERS</a>
                        </Menu>
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