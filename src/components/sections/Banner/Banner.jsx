import s from "./Banner.module.css";
import { IMAGE_BASE_URL } from "../../../constants";
import { ChevronRightIcon, PlayIcon } from "../../icons";

const Banner = (props) => {
  return (
    <div
      className={s.banner}
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL}${props.backdrop_path})`,
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
          src={`${IMAGE_BASE_URL}${props.poster_path}`}
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

export default Banner;
