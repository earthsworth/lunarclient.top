import './App.css'
import {HashRouter, Route, Routes} from "react-router";
import Navbar from "./compoents/Navbar/Navbar.tsx";
import HomePage from "./compoents/HomePage/HomePage.tsx";
import DownloadPage from "./compoents/DownloadPage/DownloadPage.tsx";
import WeaveIndexPage from "./compoents/WeaveIndexPage/WeaveIndexPage.tsx";
import PineapplePage from "./compoents/PineapplePage/PineapplePage.tsx";

function App() {
    return (<>
        <HashRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="download" element={<DownloadPage repository={"CubeWhyMC/celestial"}/>}/>
                <Route path="weave" element={<WeaveIndexPage dataSource={"https://raw.githubusercontent.com/CubeWhyMC/weave-index/refs/heads/master/index-by-developers.json"}/>}/>
                <Route path="pineapple" element={<PineapplePage/>}/>
            </Routes>
        </HashRouter>
    </>);
}

export default App
