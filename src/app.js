
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./component/Home/Home";
import Header from "./component/Header/header";
import Features from "./component/Features/Features";
import Pricing from "./component/Pricing/Pricing";
import Blog from "./component/Blog/Blog";



const App = ()=>{
    
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/features" element={<Features/>}></Route>
                    <Route path="/pricing" element={<Pricing/>}></Route>
                    <Route path="/blog" element={<Blog/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);