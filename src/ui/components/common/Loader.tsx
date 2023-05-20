import React from "react";

class Loader extends React.Component {
    render() {
        return (
            <div className={"Loader"}>
                <div className={"Loader_Spinner"} />
                <p>Loading...</p>
            </div>
        );
    }
}

export default Loader;
