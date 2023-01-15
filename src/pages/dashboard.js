import React from "react";
import Carousel from "../components/carousel";
import MovieCard from "../components/movieCard";
import Section from "../components/section";
import Hero from "../components/hero";
import Footer from "../components/footer";
import VideoPlayer from "../components/videoPlayer";

export default function Dashboard() {
  return (
    <div>
      <Hero />
      <Section header="Featured Movie">
        <Carousel>
          {[1, 2, 3, 5, 8, 9, 9, 12, 13, 14, 15, 22, 44, 66]?.map((el) => (
            <MovieCard key={el} />
          ))}
        </Carousel>
      </Section>
      <Section header="New Arrival">
        <Carousel>
          {[1, 2, 3, 5, 8, 9, 9, 12, 13, 14, 15, 22, 44, 66]?.map((el) => (
            <MovieCard key={el} />
          ))}
        </Carousel>
      </Section>
      <Section header="Exclusive Videos">
        <Carousel slidesToShow={3}>
          {[1, 2, 3, 5, 8, 9, 9, 12, 13, 14, 15, 22, 44, 66]?.map((el) => (
            <VideoPlayer key={el} />
          ))}
        </Carousel>
      </Section>
      <Section header="Featured Casts">
        <Carousel>
          {[1, 2, 3, 5, 8, 9, 9, 12, 13, 14, 15, 22, 44, 66]?.map((el) => (
            <MovieCard cast key={el} />
          ))}
        </Carousel>
      </Section>

      <Footer />
    </div>
  );
}
