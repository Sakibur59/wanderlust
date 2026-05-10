import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { LuMap, LuMapPin } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";

const DestinationCard = ({ destination }) => {
  const { _id, destinationName, country,imageUrl, price, duration } =
    destination;
  return (
    <div className="border mb-8 rounded-lg  shadow-lg">
      <Image
        src={imageUrl}
        alt={destinationName}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <LuMapPin></LuMapPin>
          <span>{country}</span>
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <h2 className="text-xl font-bold">{destinationName}</h2>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <FaRegCalendar></FaRegCalendar>
              <span className="text-gray-500 ml-1">{duration} days</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">${price}</h3>
          </div>
        </div>
      
        <Link href={`/destinations/${_id}`}><Button variant="ghost" className="mt-3 text-cyan-500 ">Read More<MdArrowOutward /></Button></Link>
      </div>
    </div>
  );
};

export default DestinationCard;
