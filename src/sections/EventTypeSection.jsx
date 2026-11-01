import { ArrowRight } from 'lucide-react'
import React, { useEffect, useRef, useState } from "react";
import { carUsageCategories } from '../assets/assets'
import CarCard from '../components/CarCard'

const EventTypeSection = () => {

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.20 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className='section-padding bg-black' 
        >
            <div className="max-w-7xl mx-auto mb-24 ">
                {/* TITLE */}
                <div className="mb-20 flex justify-between items-end">
                    {/* Text */}
                    <div>
                        <h2
                            style={{ transitionDelay: "100ms" }}
                            className={`heading-2 clash-display grad1 from-zinc-50 max-w-2xl transition-all duration-1000 ease-out ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-12"
                            }`}
                        >
                            Perfect Ride for Every Occasion
                        </h2>
                        <p
                            style={{ transitionDelay: "350ms" }}
                            className={`text-zinc-400 max-w-md transition-all duration-1000 ease-out ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                        >
                            Find the ideal car for your business needs, family
                            adventures, or special moments.
                        </p>
                    </div>
                    {/* Button */}
                    <button
                        style={{ transitionDelay: "500ms" }}
                        className={`hidden lg:flex bg-blue-300 text-zinc-800 py-3 px-5 rounded-full cursor-pointer hover:bg-transparent border border-transparent hover:border-zinc-100 transition-all duration-1000 ease-out hover:text-zinc-200 clash-display items-center gap-2 ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-12"
                        }`}
                    >
                        See All <ArrowRight className="w-5" />
                    </button>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {/* CarCards */}
                    {carUsageCategories.map((event, index) => (
                        <div
                            key={index}
                            style={{
                                transitionDelay: `${650 + index * 200}ms`,
                            }}
                            className={`transition-all duration-1000 ease-out ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-16"
                            }`}
                        >
                            <CarCard {...event} />
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default EventTypeSection