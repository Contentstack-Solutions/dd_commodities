
export default function BrandBanner(){
    return(
        <div className="max-w-8xl mx-auto px-8  mt-10 flex flex-col">
            <p className=" uppercase font-bold text-[#0054A0] font-raleway text-center">Our Brands</p>
            <p className="text-[40px] font-extrabold  text-[#0054A0] tracking-wider font-raleway text-center">More of what pets crave</p>
        
            <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto gap-8">
                <div 
                    className="w-[250px] h-[250px] bg-no-repeat bg-center bg-contain group"
                    style={{backgroundImage: `url(https://images.contentstack.io/v3/assets/blt8d1561b360c43524/blt084e30f09790a2e2/66e2e7635851c233ac270ede/WildDelightLogo_OutdoorBirds-300x166.jpg)`}}
                >
                    <div className="bg-[#0054A0] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex w-full h-full p-6 items-center">
                        <p className="text-white font-semibold">Wild Delight® Outdoor Pet Food provides premium ingredients for wild birds and other wildlife. Learn more about these products, where to buy, and more!</p>
                    </div>
                </div>

                <div 
                    className="w-[250px] h-[250px] bg-no-repeat bg-center bg-contain group"
                    style={{backgroundImage: `url(https://images.contentstack.io/v3/assets/blt8d1561b360c43524/blt0144d117148b40cc/66e2e7633292d531c7777381/3d-logo.png)`}}
                >
                    <div className="bg-[#0054A0] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex w-full h-full p-6 items-center">
                        <p className="text-white font-semibold">3-D® Pet Products provides premium nutrition for a variety of caged birds, small animals, wild birds and wildlife. Learn more about these products, where to buy, and more!</p>
                    </div>
                </div>

                <div 
                    className="w-[250px] h-[250px] bg-no-repeat bg-center bg-contain group"
                    style={{backgroundImage: `url(https://images.contentstack.io/v3/assets/blt8d1561b360c43524/blte60e1a607787ebbf/66e2e763b07f4ba62c296c3f/BetterBirdLogo-300x193.jpg)`}}
                >
                    <div className="bg-[#0054A0] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex w-full h-full p-6 items-center">
                        <p className="text-white font-semibold">Better Bird® provides premium nutrition for a variety of Wild Birds and Caged Birds. Learn more about these products, where to buy, and more!</p>
                    </div>
                </div>

                <div 
                    className="w-[250px] h-[250px] bg-no-repeat bg-center bg-contain group"
                    style={{backgroundImage: `url(https://images.contentstack.io/v3/assets/blt8d1561b360c43524/blt5c2f24375b3987a3/66e2e763999c143b5e8345a1/lavian-logo.png)`}}
                >
                    <div className="bg-[#0054A0] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex w-full h-full p-6 items-center">
                        <p className="text-white font-semibold">L’Avian Plus™ provides the finest quality, premium foods and treats for all caged birds and small animals. Learn more about these products, where to buy, and more!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}