"use client";
import React from "react";
import { Navbar } from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import Knowusbetter from "@/components/Knowusbetter";
import { StickyScroller } from "@/components/StickyScroller";

export default function Home() {
  return (
    <div className="relative w-full">
        <Navbar />
        <HomePage/>
        <Knowusbetter/>
    </div>
  );
}
