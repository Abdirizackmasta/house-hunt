import React from "react";

const countries = [
  { name: "Kenya", detail: "Flagship market" },
  { name: "Ghana", detail: "West Africa hub" },
  { name: "Egypt", detail: "North Africa desk" },
  { name: "Turkey", detail: "Origin & sourcing" },
  { name: "UK", detail: "International office" },
];

const pillars = [
  {
    title: "Our Mission",
    copy:
      "To deliver the highest level of service and expertise in real estate, so every client reaches their property goals with confidence, from first viewing to final handover.",
  },
  {
    title: "Our Approach",
    copy:
      "We pair Turkish and Middle Eastern development craft with an intimate read of the African market — modern architecture, briefed around how people actually live.",
  },
  {
    title: "Our Commitment",
    copy:
      "Trust is the currency we build in. Impeccable service, honest advice, and delivery on the date we promised — that is what earns a client back for their second home.",
  },
];

const services = [
  {
    tag: "Development",
    title: "Property Development & Construction",
    copy:
      "House Hunt is an international property developer. We delivered the Moon Valley Apartments in Kenya in 2020, and currently have three projects under construction with two more launching by end of 2023.",
    icon: (
      <path d="M4 21V7l8-4 8 4v14M9 21v-6h6v6M4 21h16" />
    ),
  },
  {
    tag: "Management",
    title: "Property Management",
    copy:
      "Dedicated teams handle maintenance, tenant relations, and day-to-day operations, so an investment keeps performing long after the keys change hands.",
    icon: (
      <path d="M12 3l1.9 4.3 4.7.4-3.6 3.1 1.1 4.6L12 13l-4.1 2.4 1.1-4.6-3.6-3.1 4.7-.4L12 3z" />
    ),
  },
  {
    tag: "Advisory",
    title: "Real Estate Consulting",
    copy:
      "Our consultants help investors and homeowners make informed decisions through strategic guidance, market data, and a straight answer when a deal isn't right.",
    icon: (
      <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0zm9-4v4l3 2" />
    ),
  },
];

function AboutPage() {
  return (
    <div className="bg-[#FAF7F1] text-[#1B1815]">
      {/* Fonts, scoped-free so the palette below reads consistently */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap');
        .ff-display { font-family: 'Fraunces', serif; }
        .ff-body { font-family: 'Inter', sans-serif; }
        .eyebrow { font-family: 'Inter', sans-serif; letter-spacing: 0.18em; }
      `}</style>

      <div className="ff-body">
        {/* ───────────────────────── Hero ───────────────────────── */}
        <section className="pt-28 pb-16 px-6 md:px-10 border-b-4 border-[#C9A646]">
          <div className="max-w-5xl mx-auto">
            <p className="eyebrow inline-block text-[11px] uppercase font-semibold text-[#1B1815] bg-[#C9A646] px-3 py-1">
              About House Hunt — est. 2017
            </p>
            <h1 className="ff-display font-semibold text-[#1B1815] text-4xl md:text-6xl leading-[1.08] mt-6 max-w-4xl">
              Building the addresses Africa's next generation will call{" "}
              <span className="text-[#C9A646]">home</span>.
            </h1>
            <div className="mt-8 h-1 w-20 bg-[#C9A646]" />
            <p className="mt-8 max-w-2xl text-[#1B1815]/70 text-lg leading-relaxed">
              We're a real estate developer dedicated to helping you find your
              dream home. Our team of experienced professionals is committed
              to exceptional service and personalized attention on every deal
              — whether you're buying, selling, or renting. Thank you for
              trusting us with something this important.
            </p>
          </div>
        </section>

        {/* ─────────────────── Country footprint strip ─────────────────── */}
        <section className="bg-[#1B1815] py-10 px-6 md:px-10 border-y-4 border-[#C9A646]">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-x-12 gap-y-6 justify-between">
            {countries.map((c) => (
              <div key={c.name}>
                <p className="ff-display italic text-2xl md:text-3xl text-[#C9A646]">
                  {c.name}
                </p>
                <p className="eyebrow text-[10px] uppercase text-[#FAF7F1]/45 mt-1">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────────────────── Pillars ───────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1B1815]/10">
            {pillars.map((p) => (
              <div key={p.title} className="bg-[#FAF7F1] p-8 border-t-4 border-[#C9A646]">
                <h2 className="ff-display text-xl font-semibold text-[#1B1815]">
                  {p.title}
                </h2>
                <p className="text-[#1B1815]/65 mt-4 leading-relaxed text-[15px]">
                  {p.copy}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────── Founding story ─────────────────────── */}
        <section className="bg-[#1B1815] text-[#FAF7F1] py-20 px-6 md:px-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="eyebrow text-[11px] uppercase font-semibold text-[#C9A646]">
                Our story
              </p>
              <h2 className="ff-display font-semibold text-3xl md:text-4xl leading-tight mt-4">
                Fifteen years of international experience, brought home to
                Africa.
              </h2>
              <p className="mt-6 text-[#FAF7F1]/70 leading-relaxed">
                Founded in 2017, House Hunt is a preeminent real estate
                developer serving buyers of luxury property across Africa. The
                company was built with the African spirit in heart and mind,
                bringing along vast expertise in real estate development from
                Turkey and the Middle East. Today we have presence in Kenya,
                Ghana, Egypt, Turkey and the UK — offering the African market
                modern architecture, unrivaled innovation, and market
                knowledge, with an uninterrupted vision for industry
                leadership.
              </p>
              <p className="mt-4 text-[#FAF7F1]/70 leading-relaxed">
                With our cutting-edge lifestyle brand, House Hunt has set new
                benchmarks in the industry, built around impeccable customer
                service, professional advice, and timely delivery. We are a
                long-term brand with a win-win mentality — commitment to
                quality and the best value for our clients is our daily goal.
              </p>

              <blockquote className="mt-10 border-l-2 border-[#C9A646] pl-6">
                <p className="ff-display italic text-xl md:text-2xl leading-snug text-[#FAF7F1]">
                  "Today we can confidently tell our customers to expect more
                  when they work with House Hunt. The board and I have
                  brought our combined experience to the table to construct
                  over 1,000 high-end apartments serving over 400 clients."
                </p>
                <p className="eyebrow text-[11px] uppercase text-[#FAF7F1]/50 mt-4">
                  Majeed Saad — CEO, House Hunt
                </p>
              </blockquote>
            </div>

            <div className="lg:col-span-2 relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/images/general/about.jpg"
                  alt="A House Hunt residential development"
                  className="w-full h-full object-cover grayscale-[15%]"
                />
                <div className="absolute inset-0 bg-[#C9A646] mix-blend-multiply opacity-15" />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#C9A646]/30" />
              </div>
              <p className="eyebrow text-[10px] uppercase text-[#FAF7F1]/40 mt-4">
                Moon Valley Apartments — Kenya, 2020
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────── Services ───────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">
          <p className="eyebrow text-[11px] uppercase font-semibold text-[#8B6B2E]">
            What we do
          </p>
          <h2 className="ff-display font-semibold text-3xl md:text-4xl text-[#1B1815] mt-4 mb-14">
            Our Services
          </h2>

          <div className="flex flex-col">
            {services.map((s, i) => (
              <div
                key={s.tag}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12 ${
                  i !== services.length - 1 ? "border-b border-[#1B1815]/10" : ""
                }`}
              >
                <div className="lg:col-span-1 flex lg:block">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#C9A646] text-[#1B1815]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      {s.icon}
                    </svg>
                  </span>
                </div>

                <div className="lg:col-span-6">
                  <p className="eyebrow inline-block text-[10px] uppercase font-semibold text-[#1B1815] bg-[#C9A646] px-2.5 py-1 mb-3">
                    {s.tag}
                  </p>
                  <h3 className="ff-display text-2xl font-semibold text-[#1B1815]">
                    {s.title}
                  </h3>
                  <p className="text-[#1B1815]/65 leading-relaxed mt-4 max-w-lg">
                    {s.copy}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src="/images/general/about.jpg"
                      alt={s.title}
                      className="w-full h-full object-cover grayscale-[15%]"
                    />
                    <div className="absolute inset-0 bg-[#1B1815] mix-blend-multiply opacity-10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
