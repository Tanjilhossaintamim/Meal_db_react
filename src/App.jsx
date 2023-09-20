import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Header />
      {navigation.state == "loading" ? <div>loading....</div> : <Outlet />}
    </>
  );
}

export default App;
