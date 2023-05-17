import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "@components/Header";

import Home from "@pages/Home";
import Downloads from "@pages/Downloads";

import "@css/App.css";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/downloads"} element={<Downloads />} />
                    <Route path={"/wiki"} element={<p>Wiki</p>} />
                    <Route path={"/features"} element={<p>Features</p>} />
                    <Route path={"/config"} element={<p>Config Generator</p>} />
                </Routes>

                <div className={"Footer"}>
                    <p>Grasscutter Team © 2023</p>
                </div>
            </div>
        );
    }
}

export default App;
