import React from "react";

function page() {
  return (
    <div className="font-sans bg-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#C9A646]">
          About Us
        </h1>
        <p className="text-gray-700 mt-4">
          Welcome to our real estate website! We are dedicated to helping you
          find your dream home. Our team of experienced professionals is
          committed to providing exceptional service and personalized attention
          to every client. Whether you're buying, selling, or renting, we are
          here to guide you through the process and ensure a smooth and
          successful experience. Thank you for choosing us as your trusted real
          estate partner.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        <div className="bg-white p-6 border border-gray-300 shadow-md">
          <h2 className="text-2xl font-semibold text-[#C9A646]">Our Mission</h2>
          <p className="text-gray-700 mt-4">
            Our mission is to provide the highest level of service and expertise
            in the real estate industry, ensuring that every client achieves
            their property goals with confidence and satisfaction.
          </p>
        </div>
        <div className="bg-white p-6 border border-gray-300 shadow-md">
          <h2 className="text-2xl font-semibold text-[#C9A646]">Our Mission</h2>
          <p className="text-gray-700 mt-4">
            Our mission is to provide the highest level of service and expertise
            in the real estate industry, ensuring that every client achieves
            their property goals with confidence and satisfaction.
          </p>
        </div>
        <div className="bg-white p-6 border border-gray-300 shadow-md">
          <h2 className="text-2xl font-semibold text-[#C9A646]">Our Mission</h2>
          <p className="text-gray-700 mt-4">
            Our mission is to provide the highest level of service and expertise
            in the real estate industry, ensuring that every client achieves
            their property goals with confidence and satisfaction.
          </p>
        </div>  
        
      </div>
      <div className="font-sans bg-amber-300 py-16 mt-7">
        <div className="max-w-7xl mx-auto mt-5 px-6 ">
          <h1 className="text-3xl md:text-4xl font-bold text-[#C9A646] mb-4">
            Founded in the year 2017, House Hunt is a preeminent Real Estate
            Developer with over 15 years of international experience, serving
            buyers of luxury property in Africa
          </h1>
          <div className="flex flex-col md:flex-row gap-6">
            <p>
              The company was built with the African spirit in heart and mind,
              bringing along the vast expertise in real estate development from
              Turkey and the Middle East. Currently House Hunt has presence in
              Kenya, Ghana, Egypt, Turkey and the UK. We offer the African
              market a blend of modern architecture, unrivaled innovation,
              experience and market knowledge, the vision for industry
              leadership is uninterrupted. With our cutting-edge lifestyle
              brand, House Hunt has set new benchmarks in the industry. We have
              built our reputation around providing impeccable customer service
              & satisfaction, professional advice and timely delivery. Trust is
              a cornerstone in the way we do business. We are a long-term
              oriented brand with a win-win strong mentality, belief and
              practice. Commitment to quality and achieving the best value for
              money for our clients, is our daily goal and what makes us stand
              out.Our culture places the consumer at the center, catering to
              local and international clientele alike by assessing each client’s
              individual needs before executing bespoke strategies towards
              fulfilling them. “Today we can confidently tell our customers to
              expect more when they work with House Hunt. The board and I have
              brought our combined experience to the table to construct over
              1,000 high end apartments serving over 400 clients.” Says the CEO,
              Majeed Saad.
            </p>
            <img
              src="/images/general/about.jpg"
              alt="property image"
              className="md:w-1/2"
            />
          </div>
        </div>
      </div>
      {/* our services */}
      <div className="max-w-7xl mx-auto mt-10 px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#C9A646] mb-8">
          Our Services
        </h1>

        <div className="flex flex-col gap-10">
          {/* Service 1 */}
          <div className="flex flex-col lg:flex-row gap-6 border border-gray-400  p-5 md:p-4 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold text-[#C9A646] mb-4">
                Property Development and Construction
              </h2>

              <p className="text-gray-700 leading-8">
                House Hunt is an international property developer. We delivered
                the Moon Valley Apartments in Kenya in 2020. Currently, we have
                3 ongoing projects and 2 to be launched by end of 2023...
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <img
                src="/images/general/about.jpg"
                alt="services"
                className="w-full h-[250px] md:h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-6 border border-gray-400 p-5 md:p-4 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold text-[#C9A646] mb-4">
                Property Management
              </h2>

              <p className="text-gray-700 leading-8">
                We streamline property management with dedicated teams focused
                on maintenance, tenant satisfaction, and efficient operations.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <img
                src="/images/general/about.jpg"
                alt="services"
                className="w-full h-[250px] md:h-[350px]  object-cover"
              />
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col lg:flex-row gap-6 border border-gray-400 p-5 md:p-4 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold text-[#C9A646] mb-4">
                Real Estate Consulting
              </h2>

              <p className="text-gray-700 leading-8">
                Our experienced consultants help investors and homeowners make
                informed real estate decisions through strategic guidance and
                market expertise.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <img
                src="/images/general/about.jpg"
                alt="services"
                className="w-full h-[250px] md:h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
