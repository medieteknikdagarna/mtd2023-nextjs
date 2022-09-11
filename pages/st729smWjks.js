import React from "react";
import { NextSeo } from "next-seo";
import SeatBooker from "../components/SeatBooker";

export default function BookingPage() {
  return (
    <>
      <NextSeo noindex={true} />
      <div>
        <SeatBooker type="standard" />
      </div>
    </>
  );
}
