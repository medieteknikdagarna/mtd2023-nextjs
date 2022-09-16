import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReservSucces from "../components/ReservSuccess";

export default function BookingSuccess({ name, company }) {
  return (
    <>
      <Header />
      <ReservSucces name={name} company={company} />
      <Footer />
    </>
  );
}
