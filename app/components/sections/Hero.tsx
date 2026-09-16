"use client";

export default function Hero() {
  const scrollToListings = () => {
    document.getElementById("listings")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/hero2.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay for text contrast */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-white text-center px-4">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-lg">
            Find Your Dream Home
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80">
            Luxury living starts here.
          </p>

          <button
            onClick={scrollToListings}
            className="mt-8 px-8 py-4 bg-[#C9A646] text-white font-semibold rounded-full
            hover:scale-105 hover:bg-[#b8962e] transition-all duration-300 shadow-lg cursor-pointer"
          >
            Explore Properties
          </button>
        </div>
      </div>
    </section>
  );
}
