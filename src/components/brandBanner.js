
export default function BrandBanner({ content }) {
    return (
        <div className="max-w-8xl mx-auto px-8  mt-10 flex flex-col">
            <p className=" uppercase font-bold text-[#0054A0] font-raleway text-center">{content?.small_label}</p>
            <p className="text-[40px] font-extrabold  text-[#0054A0] tracking-wider font-raleway text-center">{content?.headline}</p>

            <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto gap-8">
                {content?.items.map((item, index) => (
                    <a
                        key={index}
                        href={item.page.length > 0 ? item.page[0].url : "#"}
                        className="w-[250px] h-[250px] bg-no-repeat bg-center bg-contain group"
                        style={{ backgroundImage: `url(${item.image?.url})` }}
                    >
                        <div className="bg-[#0054A0] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex w-full h-full p-6 items-center">
                            <p className="text-white font-semibold whitespace-pre-wrap">{item.text}</p>
                        </div>
                    </a>
                ))}


            </div>
        </div>
    )
}