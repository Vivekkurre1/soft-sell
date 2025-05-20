import { ShieldCheck, Clock, DollarSign, Handshake } from "lucide-react";

const benefits = [
  {
    title: "Secure Transactions",
    description:
      "Our platform uses bank-level encryption and secure escrow to protect all transactions.",
    icon: ShieldCheck,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Quick Payouts",
    description:
      "Get paid within 48 hours of accepting an offer, no lengthy waiting periods.",
    icon: Clock,
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
  {
    title: "Best Market Rates",
    description:
      "Our AI pricing model ensures you get the highest possible value for your licenses.",
    icon: DollarSign,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    title: "Compliance Guaranteed",
    description:
      "We handle all legal aspects of license transfers so you don't have to worry.",
    icon: Handshake,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SoftSell offers unique advantages that make selling software
            licenses simpler, faster, and more profitable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white rounded-lg p-6 h-full shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div
                    className={`${benefit.bgColor} p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className={`${benefit.color} w-7 h-7`} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
