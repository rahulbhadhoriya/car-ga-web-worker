"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {};

  useEffect(() => {
    //@ts-ignore
    if (window.dataLayer) {
      for (let i = 0; i < 20; i++) {
        //@ts-ignore
        window.dataLayer.push({
          event: "hero_page_loaded",
          value: `${i}times`,
        });
      }
      console.log(
        "check dataLayer 20 events just pushed to GA", //@ts-ignore
        window.dataLayer
      );
    }
  }, []);

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book or rent a car -- quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline you car rental experience with or booking process
        </p>

        <CustomButton
          title="Explore Cars"
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={"/hero.png"} alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
