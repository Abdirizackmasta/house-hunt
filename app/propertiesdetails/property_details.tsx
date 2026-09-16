import { properties } from "@/public/assets/properties";
import { notFound } from "next/navigation";
import Link from "next/link";
import ImageSlider from "@/app/components/ui/ImageSlider";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return properties.map((property) => ({ id: String(property.id) }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const property = properties.find((p) => String(p.id) === id);

  if (!property) return { title: "Property not found — House Hunt" };

  return {
    title: `${property.type} in ${property.location} — House Hunt`,
    description: property.description,
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const { id } = await params;
  const property = properties.find((p) => String(p.id) === id);

  if (!property) {
    notFound();
  }

  const facts = [
    { label: "Location", value: property.location },
    { label: "Type", value: property.type },
    { label: "Category", value: property.category },
    { label: "Status", value: property.status },
    {
      label: "Posted",
      value: new Date(property.datePosted).toLocaleDateString("en-KE", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <Link
        href="/#listings"
        className="text-sm text-[#C9A646] font-medium hover:underline"
      >
        ← Back to listings 
      </Link>
  
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Gallery */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <ImageSlider
              images={property.images}
              alt={`${property.location} — ${property.type}`}
              heightClassName="h-72 md:h-[420px]"
              autoSlideMs={5000}
            />
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div>
            <span className="inline-block bg-[#C9A646] text-white text-xs px-3 py-1 rounded-full mb-3">
              {property.status}
            </span>
            <h1 className="text-3xl font-bold text-gray-800">
              KSh {property.price.toLocaleString()}
            </h1>
            <p className="text-gray-500 mt-1">{property.location}</p>
          </div>

          <div className="flex gap-2 text-xs">
            <span className="bg-[#F1EAD6] text-[#8B6B2E] px-3 py-1 rounded">
              {property.type}
            </span>
            <span className="bg-[#F1EAD6] text-[#8B6B2E] px-3 py-1 rounded">
              {property.category}
            </span>
          </div>

          {property.status === "ongoing" && (
            <div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#C9A646] h-full"
                  style={{ width: `${property.progress}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {property.progress}% complete • Est. {property.completionDate}
              </p>
            </div>
          )}

          <p className="text-gray-700 leading-relaxed">{property.description}</p>

          <dl className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-5">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-wide text-gray-400">
                  {fact.label}
                </dt>
                <dd className="text-sm text-gray-800 font-medium mt-1">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={`mailto:info@househunt.com?subject=Enquiry: ${property.location}`}
            className="mt-2 w-full text-center bg-[#C9A646] text-white py-3 rounded-lg font-semibold cursor-pointer transition hover:opacity-90"
          >
            Enquire about this property
          </a>
        </div>
      </div>
    </div>
  );
}