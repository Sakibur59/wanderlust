"use client";
import { Button, Card } from "@heroui/react";
import React, { useState } from "react";
import { DateField, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { LuShieldCheck, LuCreditCard, LuHeadphones } from "react-icons/lu";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [departureDate, setDepartureDate] = useState(null);
  const { price, _id, destinationName, imageUrl, country } = destination;

  const handleBooking = async () => {
    if (!user) {
      toast.error("Please log in to book.");
      return;
    }
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: departureDate ? new Date(departureDate) : null,
    };
    const { data: tokenData } = await authClient.token();
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });
    await res.json();
    toast.success("Booking successful!");
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 sticky top-6">
      {/* Price */}
      <p className="text-xs text-gray-400 mb-1">Starting from</p>
      <div className="flex items-baseline gap-1 mb-0.5">
        <span className="text-4xl font-bold text-emerald-600">${price}</span>
      </div>
      <p className="text-xs text-gray-400 mb-5">per person</p>

      {/* Date picker */}
      <DateField onChange={setDepartureDate} className="w-full mb-4" name="date">
        <Label className="text-xs font-medium text-gray-500 block mb-1.5">
          Departure Date
        </Label>
        <DateField.Group className="w-full">
          <DateField.Input className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm bg-gray-50 focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-100">
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      {/* Book button */}
      <button
  disabled={!departureDate}
  onClick={handleBooking}
  className={`w-full py-3 text-white text-sm font-semibold rounded-md transition-all duration-150 ${
    departureDate
      ? "bg-emerald-600 hover:bg-emerald-700"
      : "bg-gray-300 cursor-not-allowed"
  }`}
>
  Book Now
</button>

      {/* Divider */}
      <div className="border-t border-gray-100 my-5" />

      {/* Trust indicators */}
      <div className="flex flex-col gap-3">
        {[
          { icon: <LuShieldCheck size={15} />, text: "Free cancellation up to 48h before" },
          { icon: <LuCreditCard size={15} />, text: "Secure payment guaranteed" },
          { icon: <LuHeadphones size={15} />, text: "24/7 travel support" },
        ].map((item) => (
          <div key={item.text} className="flex items-center gap-2.5 text-xs text-gray-500">
            <span className="text-gray-400 shrink-0">{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingCard;