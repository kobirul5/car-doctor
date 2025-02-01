import Heading from '@/components/Heading';
import dbConnect, { collectionObjects } from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
const ServicesSection = async () => {
    const serviceCollection = dbConnect(collectionObjects.serviceCollection)
    const data = await serviceCollection.find().toArray()
    return (
        <div className='container mx-auto px-5'>
            <Heading
                title={"Our Service Area"}
                subtile="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            ></Heading>
            <div className='grid  grid-cols-1 gap-5 md:grid-cols-3'>

                {
                    data.map((s, idx) => <div key={idx} className="card border">
                        <figure className="px-5 pt-5">
                            <Image
                                width={324}
                                height={208}
                                src={s.img}
                                alt={s.title}
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body p-5">
                            <h2 className="card-title">{s.title}</h2>
                            <div className="card-actions text-[#FF3811] flex-row items-center">
                                <p className=''>Price:{s.price}</p>
                                <Link href={`services/${s._id}`} ><FaArrowRight /></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ServicesSection;