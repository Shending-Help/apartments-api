"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ImgMediaCard from "./ui/card";

const Apartments = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await fetch("http://localhost:4000/apartments");
        const data = await response.json();
        setApartments(data);
      } catch (error) {
        console.error("Error fetching apartments:", error);
      }
    };

    fetchApartments();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="py-4 text-xl font-semibold">Apartment Listing</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {apartments.map((apartment) => (
          <Link key={apartment.id} href={`/apartment/${apartment.id}`}>
            <ImgMediaCard
              title={apartment.title}
              description={apartment.description}
              location={apartment.location}
              bedrooms={apartment.bedrooms}
              bathrooms={apartment.bathrooms}
              price={apartment.price}
              size={apartment.size}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Apartments;
