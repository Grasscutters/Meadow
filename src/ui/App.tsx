import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "@components/Header";

import Home from "@pages/Home";

import "@css/App.css";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/downloads"} element={<p>Downloads</p>} />
                    <Route path={"/wiki"} element={<p>Wiki</p>} />
                    <Route path={"/features"} element={<p>Features</p>} />
                </Routes>
            </div>
        );
    }
}

export default App;
