import { useState, useEffect } from "react";
import s from "./Header.module.css";
import { ChevronRightIcon, PlayIcon } from "../../icons";
import Loader from "../../core/Loader/Loader";
import axios from "axios";

const Banner = (props) => {
  const imageBaseURL = `https://image.tmdb.org/t/p/w500`;
  console.log(props);
  return (
    <div
      className={s.banner}
      style={{
        backgroundImage: `url(${imageBaseURL}${props.backdrop_path})`,
      }}
    >
      <div
        className={`${s.icon} ${s.icon_left}`}
        onClick={() => {
          props.handleArrowClick(-1);
        }}
      >
        <ChevronRightIcon />
      </div>
      <div
        className={`${s.icon} ${s.icon_right}`}
        onClick={() => {
          props.handleArrowClick(1);
        }}
      >
        <ChevronRightIcon />
      </div>
      <div className={s.content}>
        <img
          src={`${imageBaseURL}${props.poster_path}`}
          className={s.poster}
          alt={`${props.title}-poster`}
        />
        <div className={s.content_details}>
          <div>
            <PlayIcon height="100" width="100" />
          </div>
          <div className={s.content_title}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1>'{props.title}'</h1>
              <p>{props.vote_average}</p>
            </div>
            <h2>Watch The Official Trailer</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [trending, setTrending] = useState({
    isLoading: true,
    data: [],
    error: null,
  });

  const [currentMovie, setCurrentMovie] = useState({
    index: -1,
  });

  useEffect(() => {
    if (trending.data.length > 0) {
      setCurrentMovie({
        index: 0,
        ...trending.data[0],
      });
    }
  }, [trending]);

  const fetchTrending = async () => {
    try {
      const { data } = await axios.get("/trending/all/week");
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
        <h1>List Banner</h1>
      </div>
    </div>
  );
};

export default Header;
