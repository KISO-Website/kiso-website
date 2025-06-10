"use client";

import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import MemberBenefits from "@/components/MemberBenfits";
import Form from "@/components/Form";
import ExecutiveBoard from "@/components/ExecutiveBoard";

const loremArray = [
  "June 4: Kiso App Launches with Exciting Features!",
  "June 5: New Update Available - Check Out the Latest Improvements!",
  "June 6: Kiso App Reaches 1,000 Downloads - Thank You for Your Support!",
  "June 7: Kiso App Now Supports Dark Mode - Switch It On!",
  "June 8: Kiso App Introduces New User Interface - Try It Out!",
  "June 9: Kiso App Partners with Local Businesses Discover Exclusive Offers!",
];

const users = [
  {
    img: "/images/hero3.jpg",
    name: "John Doe",
    role: "President",
  },
  {
    img: "/images/hero3.jpg",
    name: "Sally Doe",
    role: "Vice President",
  },
  {
    img: "/images/hero3.jpg",
    name: "Jack Doe",
    role: "Treasurer",
  },
  {
    img: "/images/hero3.jpg",
    name: "Jay Doe ",
    role: "Event Coordinator",
  },
  {
    img: "/images/hero3.jpg",
    name: "Jack Doe",
    role: "Avertising lead",
  },
];

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  return (
    <>
      <Banner newsArray={loremArray} />
      <Hero />
      <MemberBenefits />
      <Map />
      <Form />
      <ExecutiveBoard users={users}/>
    </>
  );
}
