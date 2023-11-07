import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Chess from "./pages/Chess";
import NavBar from "./components/NavBar";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path={'/'}>
                    <Route index element={<Home/>}/>
                    <Route path={'about'} element={<About/>}/>
                    <Route path={'academics'} element={<Home/>}/>
                    <Route path={'chess'} element={<Chess/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
