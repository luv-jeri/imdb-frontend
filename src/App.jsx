import s from "./styles/App.module.css";
import Nav from "./components/layout/Nav/Nav";
import Header from "./components/layout/Header/Header";


function App() {
  return (
    <div className={s.wrapper}>
      <Nav />
      <Header />
    </div>
  );
}

export default App;
