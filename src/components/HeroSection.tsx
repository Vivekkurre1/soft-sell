import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gray-900 dark:text-white animate-fade-in">
              Unlock the Value of Your Unused Software Licenses
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-white mb-8 max-w-lg animate-fade-in-delayed">
              Transform idle software licenses into instant cash. Our platform
              connects sellers with verified buyers for seamless, secure
              transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed-more">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group">
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-md transition-all duration-300">
                Learn How It Works
              </button>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="animate-float">
              <div className="relative rounded-xl bg-gradient-to-br from-blue-100 to-teal-50 p-1 shadow-xl">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <img
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Software Resale Platform"
                    className="w-full"
                  />
                  <div className="p-6">
                    <div className="flex justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900">
                          Adobe Creative Cloud
                        </h3>
                        <p className="text-sm text-gray-500">
                          Enterprise License
                        </p>
                      </div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium h-fit">
                        $950
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">
                        Verified Value
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="hidden md:block absolute -bottom-10 -left-10 bg-blue-600 text-white p-4 rounded-lg shadow-lg animate-float-delayed z-10">
              <p className="text-sm font-medium">Average payout time:</p>
              <p className="text-xl font-bold">Just 48 hours</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
