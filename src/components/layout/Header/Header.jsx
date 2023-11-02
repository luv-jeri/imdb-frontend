import { useState, useEffect } from "react";
import s from "./Header.module.css";
import Loader from "@core/Loader/Loader";
import { tmdbAxios } from "@/constants";
import Banner from "@sections/Banner/Banner";
import BannerList from "@sections/BannerList/BannerList";

const Header = () => {
  const [trending, setTrending] = useState({
    isLoading: true,
    data: [],
    error: null,
  });

  const [currentMovie, setCurrentMovie] = useState({
    index: -1,
  });

  const [bannerMovies, setBannerMovies] = useState({
    data: [],
  });

  useEffect(() => {
    if (trending.data.length > 0) {
      setCurrentMovie({
        index: 0,
        ...trending.data[0],
      });

      // remove the first movie from the list
      const movies = [...trending.data];
      movies.shift();
      setBannerMovies({
        data: movies,
      });
    }
  }, [trending]);

  const fetchTrending = async () => {
    try {
      const { data } = await tmdbAxios.get("/trending/all/week");
      setTrending({
        isLoading: false,
        data: data.results,
        error: null,
      });
    } catch (error) {
      setTrending({
        isLoading: false,
        data: [],
        error: error.message,
      });
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  const handleArrowClick = (move) => {
    if (currentMovie.index + move < 0) {
      return setCurrentMovie({
        index: trending.data.length - 1,
        ...trending.data[trending.data.length - 1],
      });
    }

    if (currentMovie.index + move > trending.data.length - 1) {
      return setCurrentMovie({
        index: 0,
        ...trending.data[0],
      });
    }

    setCurrentMovie({
      index: currentMovie.index + move,
      ...trending.data[currentMovie.index + move],
    });
  };

  const handleBannerClick = (id) => {
    const index = trending.data.findIndex((movie) => movie.id === id);
    setCurrentMovie({
      index,
      ...trending.data[index],
    });

    // remove the clicked movie from the list
    const movies = [...trending.data];
    movies.splice(index, 1);
    setBannerMovies({
      data: movies,
    });
  };

  return (
    <div className={`container ${s.header_container}`}>
      <div className={s.header_banner_container}>
        {trending.isLoading ? (
          <Loader />
        ) : (
          <Banner {...currentMovie} handleArrowClick={handleArrowClick} />
        )}
      </div>
      <div className={s.header_list_banner_container}>
        <BannerList {...bannerMovies} handleBannerClick={handleBannerClick} />
      </div>
    </div>
  );
};

export default Header;
