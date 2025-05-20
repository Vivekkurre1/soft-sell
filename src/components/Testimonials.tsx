import { useState } from "react";
import { ChevronRight, ChevronLeft, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "IT Manager",
    company: "Acme Corp",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "SoftSell made it incredibly easy to recover value from our unused Adobe licenses. The process was smooth, and we received payment within 24 hours of accepting their offer. Their valuation was significantly higher than what we were quoted elsewhere.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CFO",
    company: "TechStart Inc",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "As a growing startup, cash flow is critical. SoftSell helped us recoup thousands of dollars from software licenses we no longer needed. Their platform is intuitive, secure, and their customer service team was responsive throughout the process.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Operations Director",
    company: "Global Solutions",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "We had over 50 unused Microsoft licenses after downsizing, and SoftSell made the resale process painless. Their compliance team handled all the transfer details, and we received fair market value for each license.",
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from businesses that have
            successfully sold their software licenses through SoftSell.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Desktop view: side-by-side cards */}
          <div className="hidden md:flex gap-6 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`min-w-[calc(50%-12px)] transform transition-all duration-500 ${
                  index === currentIndex
                    ? "scale-105 shadow-lg z-10"
                    : index === (currentIndex + 1) % testimonials.length
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0 absolute"
                }`}
              >
                <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm h-full flex flex-col">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic flex-grow">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile view: single card */}
          <div className="md:hidden">
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentIndex].role},{" "}
                    {testimonials[currentIndex].company}
                  </p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonials[currentIndex].rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "{testimonials[currentIndex].text}"
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
