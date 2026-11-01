
import { Sparkles } from "lucide-react";

const HeroSection = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-black">

            {/* BACKGROUND */}
            <div className="hero-bg absolute inset-0 bg-[url(/car2.png)] bg-no-repeat bg-top bg-cover" />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

            {/* CONTENT */}
            <div className="container absolute mx-auto px-6 bottom-10 z-10">
                <div className="z-50 gap-4 md:centered-row lg:gap-80">

                    {/* LEFT */}
                    <div className="z-10 left">
                        <div className="col max-w-3xl mx-auto">

                            {/* SUB HEADING */}
                            <div className="mb-4 hero-badge">
                                <div className="bg-zinc-300/20 text-zinc-50 rounded-full px-4 py-1 text-sm font-medium inline-flex items-center clash-display">
                                    <Sparkles className="h-3.5 w-3.5 mr-1" />
                                    Your Journey, Elevated
                                </div>
                            </div>

                            {/* MAIN HEADING */}
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold lg:leading-20 mb-6 clash-display text-nowrap hero-title">
                                <span className="grad1 clash-display">
                                    Premium
                                </span>{" "}
                                car, <br /> rental
                            </h1>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="right hero-description">
                        <p className="text-lg z-10 text-gray-200 mb-8 max-w-md">
                            Unlock unparalleled freedom with our premium car rental service.
                            <br className="hidden md:block" />
                            Experience luxury, comfort, and seamless booking.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;
