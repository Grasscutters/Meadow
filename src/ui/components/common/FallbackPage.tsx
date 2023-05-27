import React from "react";

class FallbackPage extends React.Component {
    render() {
        return (
            <div className={"FallbackPage"}>
                <div>
                    <h1>404. Oops!</h1>
                    <p>Looks like you've found a page that doesn't exist.</p>
                    <p>Try going back to the <a href={"/"}>home page</a>.</p>
                </div>
            </div>
        );
    }
}

export default FallbackPage;
