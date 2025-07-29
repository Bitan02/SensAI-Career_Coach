"use client";

import React from 'react'
import Link from "next/link";
import next from 'next';
import { Button } from "@/components/ui/button";
import { TypeOutline } from 'lucide-react';
import Image from 'next/image';
import { useEffect,useRef } from 'react';

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
  const imageElement = imageRef.current;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 100;

    if (scrollPosition > scrollThreshold) {
      imageElement?.classList.add("scrolled");
    } else {
      imageElement?.classList.remove("scrolled"); // remove when scrolled back up
    }
  };

  window.addEventListener("scroll", handleScroll);

  // Clean up the listener on unmount
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
      <div className='space-y-6 text-center'>
        <div className='space-y-6 mx-auto'>
        <h1 className='gradient-title text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl'>
          Your AI Career coach for
          <br />
          Professional Succes 
        </h1>
        <p>
          Advance your career with personalized guidence, interview prep, and AI-powered tools for job succes.
        </p>
        </div>
        <div>
          <Link href="/dashboard">
            <Button size="lg" className="px-8">Get Started</Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" className="px-8" variant={TypeOutline}>Watch demo</Button>
          </Link>
        </div>

        <div className='hero-image-wrapper mt-5 md:mt-0'>
          <div ref={imageRef} className='hero-image'>
            <Image src={"/banner.jpeg"}
            width={1280}
            height={720}
            alt="Dashboard Preview"
            className="rounded-lg shadow=2x1 border mx-auto"
            priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;