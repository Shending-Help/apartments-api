"use client";

import React from "react";
import Image from "next/image";
import ActiveLastBreadcrumb from "@/components/ui/Breadcrumb";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const page = ({ params }) => {
  const { id } = params;
  const [apartment, setApartment] = React.useState({});
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const fetchApartment = async () => {
      try {
        const response = await fetch(`http://localhost:8080/apartments/${id}`);
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
            style={{ backgroundImage: `url(${apartment.image})` }}
            className="w-[900px] h-[500px] rounded-2xl bg-center bg-cover duration-500"
          ></div>
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
