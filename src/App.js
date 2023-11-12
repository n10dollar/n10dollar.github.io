import './App.css';
import {lazy, Suspense} from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

import parameters from "./data/parameters"

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Suspense fallback={<span />}>
                <Routes>
                    <Route path={'/'}>
                        <Route index element={<Home/>}/>
                        {parameters.pages.map((page, index) => {
                            const capsPage = page.charAt(0).toUpperCase() + page.slice(1)
                            const ComponentPage = lazy(() => import(`./pages/${capsPage}`))
                            return (
                                <Route 
                                    key={index} 
                                    path={page} 
                                    element={<ComponentPage />}
                                />)
                        })}
                    </Route>
                </Routes>
            </Suspense>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
