import React, { useState, useEffect } from 'react';

const Commend = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        // Simulate fetching JSON data (you can replace this with actual fetch call if needed)
        const data = [
            {
                id: 1,
                name: "TRAVIS LANDRY",
                text: "Theme was the best investment I ever made. It really saves me time and effort. I STRONGLY recommend theme to EVERYONE! Thank You!",
                image: "https://ibb.co.com/gLrLqMQj"
            },
            {
                id: 2,
                name: "SARAH CHEN",
                text: "Outstanding quality and attention to detail. The customer support team is incredibly responsive and helpful!",
                image: "/placeholder.svg"
            },
            {
                id: 3,
                name: "MICHAEL ROBERTS",
                text: "Exceeded all my expectations. The documentation is comprehensive and the design is absolutely beautiful.",
                image: "/placeholder.svg"
            }
        ];
        setTestimonials(data);

        // Slide interval functionality
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer); // Clear the interval on component unmount
    }, [testimonials.length]); // Dependency added to trigger when testimonials are updated

    return (
        <div className="relative max-w-3xl mx-auto px-4 py-12">
            <div className="relative min-h-[200px]">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`absolute inset-0 flex items-start gap-6 transition-opacity duration-500 ${currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
                            }`}
                    >
                        <div className="relative flex-shrink-0 w-20 h-20 rounded-full overflow-hidden">
                            <img
                                src={testimonial.image || "/placeholder.svg"}
                                alt={`${testimonial.name}'s profile`}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="flex-1 pt-2">
                            <p className="text-lg text-neutral-900 mb-4">{testimonial.text}</p>
                            <p className="text-sm font-medium text-neutral-600">{testimonial.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-neutral-900 w-4" : "bg-neutral-300 hover:bg-neutral-400"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Commend;
