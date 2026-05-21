import { Button } from "@heroui/react";
import DestinationCard from "./DestinationCard";
import Link from "next/link";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
  const destinations = await res.json();

  return (
    <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">
            Featured Destinations
          </h1>
          <p className="text-muted mt-1 text-sm sm:text-base">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>

        <Link href="/destinations" className="self-start sm:self-auto shrink-0">
          <Button
            variant="outline"
            className="rounded-none border-cyan-500 border-2 text-cyan-500 text-sm"
          >
            All Destinations
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default Featured;