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
  const featured = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFeatured());
  }, [dispatch]);

  return (
    <Helmet title="login">
      <Hero />
      <Section header="Featured Movie">
        <Carousel>
          {featured?.featured?.results?.map((movie) => (
            <MovieCard {...movie} />
          ))}
        </Carousel>
      </Section>
      <Section header="New Arrival">
        <Carousel>
          {featured?.newArrivals?.results?.map((movie) => (
            <MovieCard {...movie} />
          ))}
        </Carousel>
      </Section>
      <Section header="Exclusive Videos">
        <Carousel slidesToShow={3}>
          {featured?.videos?.map(({ key, ...video }) => (
            <VideoPlayer key={key} url={key} {...video} />
          ))}
        </Carousel>
      </Section>
      <Section header="Featured Casts">
        <Carousel>
          {featured?.casts?.map((cast) => (
            <MovieCard cast key={cast.id} {...cast} />
          ))}
        </Carousel>
      </Section>

      <Footer />
    </Helmet>
  );
}
