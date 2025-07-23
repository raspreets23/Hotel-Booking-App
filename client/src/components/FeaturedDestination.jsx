import React from "react";
import { useNavigate } from "react-router-dom";
import { roomsDummyData } from "../assets/assets";
import Hero from "./Hero";
import HotelCard from "./HotelCard";
import Title from "./Title";

const FeaturedDestination = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center px-6 py-20 md:px-16 lg:px-24 bg-slate-50">
      <Title
        title="Featured Destination"
        subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
      />

      <div className="flex items-center justify-center flex-wrap gap-6 mt-20">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <div
        onClick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }}
        className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer"
      >
        View All Destination
      </div>
    </div>
  );
};

export default FeaturedDestination;
