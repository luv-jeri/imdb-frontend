import s from "./Card.module.css";
import { IMAGE_BASE_URL } from "../../../constants";
import { PlayIcon } from "../../icons";

const Card = (props) => {
  return (
    <div
      className={`${s.card_wrapper} ${
        props.index === 0 ? s.first_card : s.n_card
      }`}
    >
      <div className={s.card_poster_wrapper}>
        <img src={`${IMAGE_BASE_URL}${props.poster_path}`} alt="poster" />
      </div>
      <div className={s.card_content}>
        <div className={s.card_play_content}>
          <PlayIcon />
          <p>5:33</p>
        </div>
        <h1>Movie title</h1>
        <h3>Subtile</h3>
      </div>
    </div>
  );
};

export default Card;
