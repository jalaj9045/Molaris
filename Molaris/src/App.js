
import "./App.css";
import { useNavigate, About } from "react-router-dom";
import Home from "./Screens/Home/Home";
function App() {
  let navigate = useNavigate();

 

  return (
    <>
    <Home/>
    </>
  );
}

export default App;
