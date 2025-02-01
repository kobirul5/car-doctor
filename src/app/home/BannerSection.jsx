
export default function BannerSection() {
    return (
        <div>
            <div className="relative w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                <img
                    src="/assets/images/banner/5.jpg"
                    alt="Affordable Car Servicing"
                    className="w-full h-64 md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-8 md:px-12">
                    <h1 className="text-white text-3xl md:text-6xl font-extrabold">Affordable <br/> Price For Car <br></br>Servicing</h1>
                    <p className="text-white text-sm md:text-base mt-2 max-w-lg">
                        There are many variations of passages of available, but the majority have suffered alteration in some form.
                    </p>
                    <div className="mt-4 flex gap-4">
                        <button className="bg-red-500 text-white px-5 py-2 rounded-md text-sm md:text-base font-semibold shadow-md hover:bg-red-600 transition-all">Discover More</button>
                        <button className="bg-gray-200 text-black px-5 py-2 rounded-md text-sm md:text-base font-semibold shadow-md hover:bg-gray-300 transition-all">Latest Project</button>
                    </div>
                </div>
                <div className="absolute bottom-5 right-5 bg-red-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-red-600 transition-all">
                    →
                </div>
            </div>
        </div>
    )
}
