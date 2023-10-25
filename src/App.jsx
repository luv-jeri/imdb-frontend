import s from "./styles/App.module.css";
import Nav from "./components/layout/Nav/Nav";

function App() {
  return (
    <div className={s.wrapper}>
      <Nav />
    </div>
  );
}

export default App;
