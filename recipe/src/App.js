import { BrowserRouter , Routes , Route } from "react-router-dom";
import AUTH from "./pages/auth";
import CREATERECIPE from "./pages/create-recipe";
import HOME from "./pages/home";
import './index.css'
import NAVBAR from "./components/navbar";
import MYRECIPE from "./pages/myrecipe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NAVBAR></NAVBAR>
      <Routes>
        <Route path="/" element ={<HOME></HOME>}/>
        <Route path="/auth" element ={<AUTH></AUTH>}/>
        <Route path="/create-recipe" element ={<CREATERECIPE></CREATERECIPE>}/>
        <Route path="/myrecipe" element ={<MYRECIPE></MYRECIPE>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
