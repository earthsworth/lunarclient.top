import './App.css'
import {HashRouter, Outlet, Route, Routes} from "react-router";
import Navbar from "./compoents/Navbar/Navbar.tsx";
import HomePage from "./compoents/HomePage/HomePage.tsx";
import DownloadPage from "./compoents/DownloadPage/DownloadPage.tsx";
import WeaveIndexPage from "./compoents/WeaveIndexPage/WeaveIndexPage.tsx";
import PineapplePage from "./compoents/PineapplePage/PineapplePage.tsx";
import SponsorPage from "./compoents/SponsorPage/SponsorPage.tsx";
import AnalysisPage from "./compoents/AnalysisPage/AnalysisPage.tsx";
import DashboardHomePage from "./compoents/DashboardHome/DashboardHomePage.tsx";
import RequireAuth from "./compoents/RequireAuth/RequireAuth.tsx";
import DashboardLoginPage from "./compoents/DashboardLoginPage/DashboardLoginPage.tsx";
import EULAPage from "./compoents/EULAPage/EULAPage.tsx";
import BadlionCNPage from "./compoents/BadlionCN/BadlionCNPage.tsx"

function App() {
    return (<>
        <HashRouter>
            <Navbar/>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="download" element={<DownloadPage/>}/>
                <Route path="weave" element={<WeaveIndexPage
                    dataSource={"https://raw.githubusercontent.com/CubeWhyMC/weave-index/refs/heads/master/index-by-developers.json"}/>}/>
                <Route path="pineapple" element={<PineapplePage/>}/>
                <Route path="sponsor" element={<SponsorPage/>}/>
                <Route path="analysis" element={<AnalysisPage/>}/>
                <Route path="EULA" element={<EULAPage/>}/>
                <Route path="BadlionCN" element={<BadlionCNPage/>}/>

                <Route path={"dashboard"} element={<Outlet/>}>
                    <Route index element={<RequireAuth>
                        <DashboardHomePage/>
                    </RequireAuth>}/>
                    <Route path={"login"} element={<DashboardLoginPage/>}/>
                </Route>
            </Routes>

        </HashRouter>
    </>);
}

export default App
