import BookingCard from "@/components/BookingCard";
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa6";
import { LuMapPin, LuClock, LuTag, LuStar } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({ headers: await headers() });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`,
    { headers: { authorization: `Bearer ${token}` } }
  );
  const destination = await res.json();

  const {
    imageUrl,
    price,
    destinationName,
    duration,
    country,
    description,
    category,
    departureDate,
  } = destination;

  const formattedDate = departureDate
    ? new Date(departureDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px] overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          alt={destinationName}
          src={imageUrl}
          fill
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Actions – top right */}
        <div className="absolute top-4 right-4 flex gap-2">
          <EditModal destination={destination} />
          <DeleteAlert destination={destination} />
        </div>

        {/* Hero text – bottom left */}
        <div className="absolute bottom-6 left-5 sm:left-8 text-white">
          <p className="text-xs uppercase tracking-widest opacity-75 mb-1">
            {category} &middot; {country}
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            {destinationName}
          </h1>
          <div className="flex items-center gap-1.5 mt-2 text-sm opacity-85">
            <LuMapPin size={14} />
            <span>{country}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left – details */}
          <div className="flex-1 min-w-0">
            {/* Highlight badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-sm font-medium bg-white border border-gray-200 text-gray-600">
                <LuClock size={14} /> {duration}
              </span>
              {formattedDate && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-sm font-medium bg-white border border-gray-200 text-gray-600">
                  <FaRegCalendar size={13} /> {formattedDate}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-sm font-medium bg-white border border-gray-200 text-gray-600">
                <LuTag size={14} /> {category}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-sm font-medium bg-emerald-50 border border-emerald-200 text-emerald-700">
                <LuStar size={14} /> ${price} / person
              </span>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {[
                { icon: <LuMapPin size={18} />, label: "Destination", value: `${destinationName}, ${country}` },
                { icon: <LuClock size={18} />, label: "Duration", value: duration },
                { icon: <LuTag size={18} />, label: "Category", value: category },
                { icon: <FaRegCalendar size={16} />, label: "Departure", value: formattedDate || departureDate },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-gray-100 rounded-lg p-4"
                >
                  <div className="text-gray-400 mb-2">{item.icon}</div>
                  <p className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold mt-0.5 truncate">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Overview */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-1">
                Overview
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Experience {destinationName}
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {description}
              </p>
            </div>
          </div>

          {/* Right – booking card */}
          <div className="w-full lg:w-80 shrink-0">
            <BookingCard destination={destination} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;