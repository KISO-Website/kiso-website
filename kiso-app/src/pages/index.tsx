import Banner from "@/components/Banner";
import Hero from "../components/Hero";
import { useState } from "react";
import ToggleButton from "@/components/ToggleButton";
import MemberBenefits from "@/components/MemberBenfits";
import Form from "@/components/Form";

const loremArray = [
  "June 4: Kiso App Launches with Exciting Features!",
  "June 5: New Update Available - Check Out the Latest Improvements!",
  "June 6: Kiso App Reaches 1,000 Downloads - Thank You for Your Support!",
  "June 7: Kiso App Now Supports Dark Mode - Switch It On!",
  "June 8: Kiso App Introduces New User Interface - Try It Out!",
  "June 9: Kiso App Partners with Local Businesses Discover Exclusive Offers!",
];

export default function Home() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Banner newsArray={loremArray} />
      <ToggleButton
        toggled={toggle}
        onToggle={() => setToggle((prev) => !prev)}
      />
      <Hero />
      <MemberBenefits />
      <Form />
    </>
  );
}
