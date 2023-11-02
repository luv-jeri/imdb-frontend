import AppRoute from "./routes/App.route";
import AuthRoute from "./routes/Auth.route";

function App() {
  const user = false;
  return <>{user ? <AppRoute /> : <AuthRoute />}</>;
}

export default App;
