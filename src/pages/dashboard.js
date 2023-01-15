import React, { useEffect } from "react";
import Carousel from "../components/carousel";
import MovieCard from "../components/movieCard";
import Section from "../components/section";
import Hero from "../components/hero";
import Footer from "../components/footer";
import VideoPlayer from "../components/videoPlayer";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeatured } from "../redux/movies/moviesSlice";
import Helmet from "../components/helmet";

export default function Dashboard() {
  const { featured, newArrivals, casts, videos, genres } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFeatured());
  }, [dispatch]);

  console.log({ genres });

  return (
    <Helmet title="Dashboard">
      <Hero />
      <Section header="Featured Movie">
        <Carousel>
          {featured?.results?.map((movie) => (
            <MovieCard genres={genres} {...movie} />
          ))}
        </Carousel>
      </Section>
      <Section header="New Arrival">
        <Carousel>
          {newArrivals?.results?.map((movie) => (
            <MovieCard genres={genres} {...movie} />
          ))}
        </Carousel>
      </Section>
      <Section header="Exclusive Videos">
        <Carousel slidesToShow={3}>
          {videos?.map(({ key, ...video }) => (
            <VideoPlayer key={key} url={key} {...video} />
          ))}
        </Carousel>
      </Section>
      <Section header="Featured Casts">
        <Carousel>
          {casts?.map((cast) => (
            <MovieCard genres={genres} cast key={cast.id} {...cast} />
          ))}
        </Carousel>
      </Section>

      <Footer />
    </Helmet>
  );
}
