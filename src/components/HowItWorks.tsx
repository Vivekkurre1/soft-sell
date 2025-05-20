import { Upload, DollarSign, CreditCard } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Upload License",
    description:
      "Submit your license information through our secure platform in just a few clicks.",
    icon: Upload,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    title: "Get Valuation",
    description:
      "Our AI-powered system calculates the optimal market value for your software license.",
    icon: DollarSign,
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
  {
    id: 3,
    title: "Get Paid",
    description:
      "Accept our offer and receive payment via your preferred method within 48 hours.",
    icon: CreditCard,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selling your unused software licenses is quick and straightforward
            with our three-step process.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;

            return (
              <div
                key={step.id}
                className="flex-1 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white rounded-lg p-6 h-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rotate-45 border-t-2 border-r-2 border-gray-200"></div>
                  )}

                  <div
                    className={`${step.bgColor} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto group-hover:scale-105 transition-transform`}
                  >
                    <IconComponent className={`${step.color} w-8 h-8`} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    <span className="inline-block w-7 h-7 rounded-full bg-blue-600 text-white text-sm mr-2 leading-none flex items-center justify-center">
                      {step.id}
                    </span>
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
