import logo from './assets/logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Chess from "./pages/Chess";
import NavBar from "./components/NavBar";
import {Container} from "@mui/material";

function App() {
    let router = (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path={'/'}>
                        <Route index element={<Home/>}/>
                        <Route path={'about'} element={<About/>}/>
                        <Route path={'chess'} element={<Chess/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )

    return router;
}

export default App;
