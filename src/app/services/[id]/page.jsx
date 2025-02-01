import dbConnect, { collectionObjects } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export default async function ServiceDetails({ params }) {
    const p = await params;
    const serviceCollection = dbConnect(collectionObjects.serviceCollection)
    const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) })
    return (
        <div>
            <section className="relative w-full border border-blue-300 rounded-lg overflow-hidden shadow-lg">
                <img
                    src="/assets/images/banner/4.jpg"
                    alt="Service Details"
                    className="w-full h-56 md:h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-start pl-8">
                    <h1 className="text-white text-3xl md:text-4xl font-extrabold">Service Details</h1>
                </div>
                <div className="absolute bottom-4 left-8 bg-red-600 text-white text-sm md:text-base px-4 py-2 rounded-md shadow-md">
                    Home / Service Details
                </div>
            </section>
        </div>
    )
}
