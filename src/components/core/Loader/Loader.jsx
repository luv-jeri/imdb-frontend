import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <div className={s.loader__spinner}>Loader</div>
    </div>
  );
};

export default Loader;
