import { MoveRight } from 'lucide-react'
import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'

import { featuredServices } from "../assets/assets"



const ServiceSection = () => {

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Scroll Reveal
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.20,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className='section-padding bg-black' >
            <div className="max-w-7xl mx-auto">
                {/* HEADING */}
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12' >
                    <div>
                        <h2
                            style={{ transitionDelay: "100ms" }}
                            className={`heading-2 clash-display grad1 from-zinc-50 transition-all duration-1000 ease-out ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-12"
                                }`}
                        >
                            Our Premium Fleet & <br className='' /> Services
                        </h2>
                        <p
                            style={{ transitionDelay: "350ms" }}
                            className={`text-zinc-400 max-w-lg transition-all duration-1000 ease-out ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                }`}
                        >
                            Discover the perfect vehicle for your needs, backed by unparalleled service and support.
                        </p>
                    </div>

                    <Link
                        to="/fleet"
                        style={{ transitionDelay: "500ms" }}
                        className={`mt-4 sm:mt-0 flex items-center text-sky-500 hover:text-sky-400 transition-all duration-1000 ease-out ${isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-12"
                            }`}
                    >
                        View All Cars <MoveRight className="ml-1 h-4 w-4" />
                    </Link>

                </div>

                {/* SERVICE CARDS */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-16">
                    {/* Service Cards */}
                    {
                        featuredServices.map((service, index) => (
                            <div
                                key={index}
                                style={{
                                    transitionDelay: `${650 + index * 180}ms`,
                                }}
                                className={`transition-all duration-1000 ease-out ${isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-16"
                                    }`}
                            >
                                <ServiceCard {...service} />
                            </div>
                            // <ServiceCard 
                            //     key={index} 
                            //     {...service}
                            //     // title={service.title} 
                            //     // image={service.imageSrc} 
                            //     // icon={service.icon}
                            // />
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default ServiceSection