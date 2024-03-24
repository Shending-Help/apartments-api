"use client";

import React from "react";
import Image from "next/image";
import ActiveLastBreadcrumb from "@/components/ui/Breadcrumb";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1682377521715-95d16dc51943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYXV0aWZ1bCUyMGhvdXNlfGVufDB8fDB8fHww",
  },
  {
    url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
  },
];

const page = ({ params }) => {
  const { id } = params;
  const [apartment, setApartment] = React.useState({});
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  React.useEffect(() => {
    const fetchApartment = async () => {
      try {
        const response = await fetch(`http://localhost:4000/apartments/${id}`);
        const data = await response.json();
        setApartment(data);
      } catch (error) {
        console.error("Error fetching apartment:", error);
      }
    };

    fetchApartment();
  }, [id]);

  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center flex-col py-6">
        <div className="flex justify-start w-full">
          <ActiveLastBreadcrumb title={apartment.title} />
        </div>
        <div className="flex justify-start items-center py-2 relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-[900px] h-[500px] rounded-2xl bg-center bg-cover duration-500"
          ></div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <ArrowBackIosNewIcon onClick={prevSlide} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <ArrowForwardIosIcon onClick={nextSlide} />
          </div>
        </div>
        <div className="py-2">
          <h1 className="text-3xl font-semibold">{apartment.title}</h1>
        </div>
        <p>{apartment.location}</p>
        <div>
          <h1 className="text-2xl py-2 font-semibold">About Apartment</h1>
          <p className="text-xl">{apartment.description}</p>
        </div>
        <div className="flex justify-start items-center w-full py-2">
          <h1 className="text-2xl py-2 font-semibold">Details</h1>
        </div>
        <div className="flex flex-col justify-start gap-4 w-full">
          <p className="text-xl">Bedrooms: {apartment.bedrooms}</p>
          <p className="text-xl">Bathrooms: {apartment.bathrooms}</p>
          <p className="text-xl">Size: {apartment.size} m2</p>
          <p className="text-xl">Price: {apartment.price} EGP</p>
        </div>
      </div>
    </div>
  );
};

export default page;
