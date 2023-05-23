import React from "react";
import { useParams } from "react-router-dom";

const Router = (Children: React.ComponentClass<any>) => {
    return (props: any) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />;
    };
};

export default Router;
