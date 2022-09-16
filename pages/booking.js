import React, { useState } from "react";
import { NextSeo } from "next-seo";
import SeatBooker from "../components/SeatBooker";
import Header from "../components/Header";

export default function BookingPage() {
  const [type, setType] = useState("Mässplats");
  return (
    <>
      <NextSeo noindex={true} />
      <div>
        <Header changeOnScroll />
        <SeatBooker type={type} setType={setType} />
      </div>
    </>
  );
}
