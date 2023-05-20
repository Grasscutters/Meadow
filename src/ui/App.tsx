import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "@components/Header";
import Loader from "@components/common/Loader";

import Home from "@pages/Home";
const Downloads = React.lazy(() => import("@pages/Downloads"));
const ConfigGen = React.lazy(() => import("@pages/ConfigGen"));

import "@css/App.css";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/downloads"} element={
                        <React.Suspense fallback={<Loader />}>
                            <Downloads />
                        </React.Suspense>
                    } />
                    <Route path={"/wiki"} element={<p>Wiki</p>} />
                    <Route path={"/features"} element={<p>Features</p>} />
                    <Route path={"/config"} element={
                        <React.Suspense fallback={<Loader />}>
                            <ConfigGen />
                        </React.Suspense>
                    } />
                </Routes>

                <div className={"Footer"}>
                    <p>Grasscutter Team © 2023</p>
                </div>
            </div>
        );
    }
}

export default App;
