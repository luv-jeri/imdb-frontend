import s from "./BannerList.module.css";
import Card from "@core/Card/Card";

const BannerList = (props) => {
  return (
    <div className={s.banner_list_wrapper}>
      <h2 className={s.up_next_text}>Up Next</h2>
      <div className={s.up_next_list}>
        {props.data.map((movie, index) => {
          return (
            <div
              key={movie.id}
              onClick={() => {
                props.handleBannerClick(movie.id);
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <Card {...movie} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannerList;
