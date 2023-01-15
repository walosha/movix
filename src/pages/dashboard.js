import React from "react";

import Hero from "../components/hero";
import MovieSection from "../components/movie/movieSection";
import Footer from "../components/footer";

export default function Dashboard() {
  return (
    <div>
      <Hero />
      <MovieSection header="Featured Movie" />
      <MovieSection header="New Arrival" />
      <MovieSection header="Exclusive Videos" />
      <MovieSection cast header="Featured Casts" />
      <Footer />
    </div>
  );
}
