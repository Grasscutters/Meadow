import React from "react";

import { slugify } from "@app/utils";

export function TableRenderer(props: any) {
    return (
        <div className={"Wiki_Table"}>
            <table>
                {props.children}
            </table>
        </div>
    );
}

export function HeadingRenderer(props: any) {
    const slug = slugify(props.children[0].toString());

    const scrollIntoView = () => {
        const element = document.getElementById(slug);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    return (
        <>
            {
                props.level === 1 ?
                    <h1 id={slug} onClick={scrollIntoView}>{props.children}</h1> :
                    <h2 id={slug} onClick={scrollIntoView}>{props.children}</h2>
            }

            <div className={"Wiki_Heading_Divider"} />
        </>
    );
}
