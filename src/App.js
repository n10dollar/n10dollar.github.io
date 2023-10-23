import logo from './logo.svg';
import './App.css';
import Home from "./pages/home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  let router = (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )

  return router;
}

export default App;
