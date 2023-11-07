import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Chess from "./pages/Chess";
import NavBar from "./components/NavBar";

function App() {
    let router = (
        <>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path={'/'}>
                        <Route index element={<Home/>}/>
                        <Route path={'about'} element={<About/>}/>
                        <Route path={'academics'} element={<Home/>}/>
                        <Route path={'chess'} element={<Chess/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )

    return router;
}

export default App;
