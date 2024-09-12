
export default function TextAndImage({ content }) {
    return (
        <div className="my-20 w-full bg-[#F4F4F4]">
            <div className="max-w-8xl mx-auto px-8 py-20 flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                    {/* <img src={content?.image?.url} /> */}
                    <img src="https://images.contentstack.io/v3/assets/blt8d1561b360c43524/blt44f62f4a2e3aeada/66e354fffae7c6d5d350153e/sustain.avif" />
                </div>

                <div className="lg:w-1/2 my-auto lg:max-w-[500px]">
                    <p className="font-raleway text-[32px]">Sustainability</p>
                    <p className="font-assistant  mt-4 whitespace-pre-wrap leading-6">Discover how DD Commodities is leading the charge towards a more sustainable future with innovative practices and eco-friendly initiatives. Find out how they are making a positive impact on the environment and the community.</p>
                    {/* <p className="font-francois text-[32px]">{content?.headline}</p>
                    <p className="font-abz text-sm mt-4 whitespace-pre-wrap leading-6">{content?.body}</p> */}
                    {/* <a href={content.page.length > 0 ? content.page[0].url : "#"} className="bg-red-600 text-white mt-4 py-2 px-7 inline-block">{content?.button_text}</a> */}
                </div>
            </div>
        </div>
    )
}