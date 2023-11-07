import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";

import parameters from "./data/parameters.json"

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path={'/'}>
                    <Route index element={<Home/>}/>
                    {parameters.pages.map((page, index) => (
                        <Route path={'home'} element={<Home/>}/>
                    ))}
                    <Route path={'home'} element={<Home/>}/>
                    <Route path={'about'} element={<About/>}/>
                    <Route path={'academics'} element={<Home/>}/>
                    <Route path={'projects'} element={<Projects/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
