import Nav from "@layout/Nav/Nav";
import Header from "@layout/Header/Header";
import s from "@styles/App.module.css";

function Home() {
  return (
    <div className={s.wrapper}>
      <Nav />
      <Header />
    </div>
  );
}

export default Home;
