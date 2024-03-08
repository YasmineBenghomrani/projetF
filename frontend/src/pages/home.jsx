import React from "react";
import HeroSection from "../components/heroSection";
import AppBarMUI from "../components/AppBarMui";
import HorizontalSwiper from "../components/horizontalSwiper";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get()
      .then((res) => {})
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <HeroSection />
      <section className="movies">
        <div className="header">
          <div className="line"></div>
          <h2>Most Popular Products</h2>
          <div className="line"></div>
        </div>
        <div className="contentProduct">
          {loading ? <CircularProgress /> : <HorizontalSwiper />}
        </div>
      </section>
    </div>
  );
}
