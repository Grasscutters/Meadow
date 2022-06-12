import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Error404 extends Component {
    render() {
        return (
            <div className="E404">
                <h1>Error 404</h1>
                <p>The page your looking for couldn't be found</p>
                <p>Yeah.. I can't be bothered to style this...</p>
                <br />
            </div>
        )
    }
}
